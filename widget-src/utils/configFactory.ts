import {
  ChecklistConfig,
  ChecklistItem,
  ChecklistSettings,
  CheckboxState,
} from "../types/index";
import { generateId } from "./dateUtils";

/**
 * Universal factory function that creates checklist config from any data format
 */
export function createChecklistConfig(
  title: string,
  items: string[] | ChecklistItem[],
  settings?: ChecklistSettings
): ChecklistConfig {
  const normalizedItems: ChecklistItem[] = items.map((item, index) => {
    if (typeof item === "string") {
      return {
        id: `item_${index}`,
        text: item,
        defaultState: CheckboxState.EMPTY,
      };
    }
    return {
      ...item,
      id: item.id || `item_${index}`,
      defaultState: item.defaultState || CheckboxState.EMPTY,
    };
  });

  return {
    title,
    items: normalizedItems,
    settings: {
      theme: {
        primaryColor: "#6B7280",
        backgroundColor: "#F8FAFB",
        textColor: "#323232",
        cornerRadius: 16,
        width: 580,
        padding: 16,
        spacing: 24,
      },
      ...settings,
    },
  };
}

/**
 * Data source adapters for different input formats
 */
export const configAdapters = {
  // From existing checklist.ts format
  fromExistingChecklist: (checklistData: any, type: string, title?: string) =>
    createChecklistConfig(
      title || `${type.charAt(0).toUpperCase() + type.slice(1)} Checklist`,
      checklistData[type] || []
    ),

  // From JSON file/API
  fromJSON: (jsonData: any) =>
    createChecklistConfig(jsonData.title, jsonData.items, jsonData.settings),

  // From plain text (each line becomes an item)
  fromText: (title: string, textData: string, settings?: ChecklistSettings) =>
    createChecklistConfig(
      title,
      textData.split("\n").filter((line) => line.trim()),
      settings
    ),

  // From array of strings
  fromStringArray: (
    title: string,
    items: string[],
    settings?: ChecklistSettings
  ) => createChecklistConfig(title, items, settings),
};

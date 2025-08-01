export enum CheckboxState {
  EMPTY = "empty",
  PARTIAL = "partial",
  COMPLETE = "complete",
}

export interface ChecklistItem {
  id: string;
  text: string;
  required?: boolean;
  category?: string;
  defaultState?: CheckboxState;
}

export interface ChecklistTheme {
  primaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
  cornerRadius?: number;
  width?: number;
  padding?: number;
  spacing?: number;
}

export interface ChecklistSettings {
  theme?: ChecklistTheme;
  columns?: number;
  groupByCategory?: boolean;
}

export interface ChecklistConfig {
  title: string;
  items: ChecklistItem[];
  settings?: ChecklistSettings;
}

export interface CheckboxItemProps {
  item: ChecklistItem;
  index: number;
  onStateChange?: () => void;
}

export interface ChecklistHeaderProps {
  title: string;
  theme?: ChecklistTheme;
}

export interface ChecklistItemsProps {
  items: ChecklistItem[];
  theme?: ChecklistTheme;
  onStateChange?: () => void;
}

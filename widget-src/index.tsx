const { widget } = figma;

import { ChecklistWidget } from "./components/ChecklistWidget";
import { configAdapters } from "./utils/configFactory";
import checklist from "./checklists";

function PropertyMenuWidget() {
  // Use the universal config adapter to migrate from existing checklist
  const config = configAdapters.fromExistingChecklist(
    checklist,
    "qa",
    "QA Checklist"
  );

  return <ChecklistWidget config={config} />;
}

widget.register(PropertyMenuWidget);

// Export everything for external use
export { ChecklistWidget } from "./components/ChecklistWidget";
export { createChecklistConfig, configAdapters } from "./utils/configFactory";
export * from "./types/index";

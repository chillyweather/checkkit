type Checklist = {
  componentPage?: string[];
  createComponent?: string[];
  qa?: string[];
  icon?: string[];
  componentCopy?: string[];
  documentation?: string[];
};

const checklist: Checklist = {};

// Component page parts
checklist.componentPage = [
  "Admin ds components (titles, arrows, borders..)",
  "Status",
  "Mapping",
  "Component",
  "QA",
  "Documentation (Do’s & Dont’s, Anatomy, Release notes, behavior)",
];

// Creating components
checklist.createComponent = [
  "Component naming (Shift+I)",
  "Layers naming",
  "Styles (typography, color, effects)",
  "Properties naming & order",
  "Icons/logo/illustrations are from foundation",
  "Responsiveness if relevant",
  "Description (misprint+link to documentation/storybook+important instructions if needed)",
  "4px grid",
  "Correct structure (check for redundant autolayout)",
  "Variant interactions (mostly atoms)",
];

// QA
checklist.qa = [
  "Components naming & location (Shift+I in external files)",
  "Check all the props (check that texts & icons are not broken)",
  "Color, text, effects styles, and variables",
  "Semantic styles (according to client)",
  "Responsiveness",
  "Icons connected to foundations",
  "Layer naming",
  "4px grid",
  "Interaction",
  "Description",
  "No conflicts",
  "Easy to use",
  "Match naming conventions and component structures to the development platform",
];

// Icon
checklist.icon = [
  "Shape is flattened",
  "Vector layer name - ic",
  "All icons are the same color",
  "Minimum 2px from the vector layer to the bounding box (in the largest dimension)",
  "Constraints set to “scale”",
  "Bounding box is same size for all - 24x24px",
];

// Copy component (from another file)
checklist.componentCopy = [
  "Detach (or reconnect) styles (colors, affects, text, grid)",
  "Detach (or Reconnect) inside ( icons, logos, atoms components) ",
  "Description (erase)",
];

// Documentation
checklist.documentation = [
  "Sync with DS",
  "Minimum | maximum instructions",
  "Text instructions (things to avoid & what to do with long text...)",
  "Alignment instructions",
  "Touch area instructions",
  "Hug/fixed/fill container instructions",
  "Links to atoms documentation",
  "Spacing (if required)",
  "Description (if required)",
  "Do's and Dont's (if required)",
  "All components variations (showing false booleans)",
  "Component behavior in screen",
  "Relevant behavior animation",
  "Release notes",
];

export default checklist;

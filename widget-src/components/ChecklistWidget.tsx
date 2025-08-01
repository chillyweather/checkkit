const { widget } = figma;
const { AutoLayout } = widget;

import { ChecklistConfig } from "../types/index";
import { useAutoDate } from "../hooks/useAutoDate";
import { ChecklistHeader } from "./ChecklistHeader";
import { ChecklistItems } from "./ChecklistItems";
import { DateFooter } from "./DateFooter";

interface ChecklistWidgetProps {
  config: ChecklistConfig;
}

export function ChecklistWidget({ config }: ChecklistWidgetProps) {
  const { lastUpdated, updateDate } = useAutoDate();
  const theme = config.settings?.theme;

  return (
    <AutoLayout
      direction="vertical"
      verticalAlignItems={"center"}
      fill={theme?.backgroundColor || "#F8FAFB"}
      cornerRadius={theme?.cornerRadius || 16}
      width={theme?.width || 580}
      padding={theme?.padding || 16}
      spacing={theme?.spacing || 24}
    >
      <ChecklistHeader title={config.title} theme={theme} />

      <ChecklistItems
        items={config.items}
        theme={theme}
        onStateChange={updateDate}
      />

      <DateFooter date={lastUpdated} theme={theme} />
    </AutoLayout>
  );
}

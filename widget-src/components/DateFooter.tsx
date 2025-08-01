const { widget } = figma;
const { AutoLayout, Text } = widget;

import { ChecklistTheme } from "../types/index";

interface DateFooterProps {
  date: string;
  theme?: ChecklistTheme;
}

export function DateFooter({ date, theme }: DateFooterProps) {
  if (!date) return null;

  const textStyle = {
    fontSize: 18,
    horizontalAlignText: "right" as const,
    width: theme?.width ? theme.width - (theme.padding || 0) * 2 : 512,
    fill: theme?.textColor || "#323232",
  };

  return (
    <AutoLayout direction="vertical">
      <Text {...textStyle}>Last updated: {date}</Text>
    </AutoLayout>
  );
}

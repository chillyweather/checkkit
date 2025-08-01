const { widget } = figma;
const { Text } = widget;

import { ChecklistHeaderProps } from "../types/index";

export function ChecklistHeader({ title, theme }: ChecklistHeaderProps) {
  return (
    <Text
      fontSize={40}
      fontWeight={"bold"}
      horizontalAlignText={"left"}
      width={theme?.width ? theme.width - (theme.padding || 0) * 2 : 512}
      fill={theme?.textColor || "#323232"}
    >
      {title}
    </Text>
  );
}

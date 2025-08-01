const { widget } = figma;
const { AutoLayout } = widget;

import { ChecklistItemsProps } from "../types/index";
import { CheckboxItem } from "./CheckboxItem";

export function ChecklistItems({
  items,
  theme,
  onStateChange,
}: ChecklistItemsProps) {
  return (
    <AutoLayout direction="vertical" spacing={16}>
      {items.map((item, index) => (
        <CheckboxItem
          item={item}
          key={item.id}
          index={index}
          onStateChange={onStateChange}
        />
      ))}
    </AutoLayout>
  );
}

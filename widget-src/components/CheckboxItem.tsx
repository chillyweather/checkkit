const { widget } = figma;
const { AutoLayout, Text, SVG } = widget;

import { CheckboxItemProps, CheckboxState } from "../types/index";
import { useChecklistState } from "../hooks/useChecklistState";
import { empty, half, full } from "../assets/checkmark";

export function CheckboxItem({
  item,
  index,
  onStateChange,
}: CheckboxItemProps) {
  const { state, cycle } = useChecklistState(
    item.id,
    item.defaultState,
    onStateChange
  );

  const getCheckmark = () => {
    switch (state) {
      case CheckboxState.EMPTY:
        return empty;
      case CheckboxState.PARTIAL:
        return half;
      case CheckboxState.COMPLETE:
        return full;
      default:
        return empty;
    }
  };

  return (
    <AutoLayout verticalAlignItems="center" spacing={8}>
      <SVG src={getCheckmark()} onClick={cycle} />
      <Text
        fontSize={18}
        horizontalAlignText={"left"}
        width={512}
        fill={"#323232"}
        onClick={cycle}
      >
        {item.text}
      </Text>
    </AutoLayout>
  );
}

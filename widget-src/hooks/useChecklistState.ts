const { widget } = figma;
const { useSyncedState } = widget;

import { CheckboxState } from "../types/index";

export function useChecklistState(
  itemId: string,
  defaultState: CheckboxState = CheckboxState.EMPTY,
  onStateChange?: () => void
) {
  const [state, setState] = useSyncedState(`checkbox_${itemId}`, defaultState);

  const cycle = () => {
    const nextState =
      {
        [CheckboxState.EMPTY]: CheckboxState.PARTIAL,
        [CheckboxState.PARTIAL]: CheckboxState.COMPLETE,
        [CheckboxState.COMPLETE]: CheckboxState.EMPTY,
      }[state as CheckboxState] || CheckboxState.EMPTY;

    setState(nextState);

    // Trigger callback after state change
    if (onStateChange) {
      onStateChange();
    }
  };

  return { state: state as CheckboxState, cycle };
}

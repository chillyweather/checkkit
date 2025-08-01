const { widget } = figma;
const { useSyncedState } = widget;

import { getDate } from "../utils/dateUtils";

export function useAutoDate() {
  const [lastUpdated, setLastUpdated] = useSyncedState("lastUpdated", "");

  const updateDate = () => {
    const currentDate = getDate();
    setLastUpdated(currentDate);
  };

  return { lastUpdated, updateDate };
}

import { useObserver } from "mobx-react";
import { useStores } from "./mobx";

export function useNavigation() {
  const { navigation } = useStores();
  return useObserver(() => {
    return navigation;
  });
}

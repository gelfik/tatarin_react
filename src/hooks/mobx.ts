import React from "react";
import { MobXProviderContext } from "mobx-react";
import RootStore from "../stores/RootStore";

export function useStores() {
  return React.useContext(MobXProviderContext) as RootStore;
}

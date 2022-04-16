import React from "react";
import { observer, Provider } from "mobx-react";
import "@vkontakte/vkui/dist/vkui.css";
import RootStore from "./stores/RootStore";
import AppRootNavigator from "./navigations/AppRootNavigator";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";

const App = observer(() => {
  const rootStore = new RootStore();

  return (
    <Provider {...rootStore}>
      <ConfigProvider appearance="light">
        <AdaptivityProvider>
          <AppRootNavigator />
        </AdaptivityProvider>
      </ConfigProvider>
    </Provider>
  );
});

export default App;

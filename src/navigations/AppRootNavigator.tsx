import { AppRoot } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useStores } from "../hooks/mobx";
import Navigator from "./Navigator";

const AppRootNavigator = observer(() => {
  const { userStore } = useStores();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userStore.setVKUser().then(() => {
      setLoading(false);
    });
  }, [userStore]);

  return (
    <AppRoot>
      <Navigator loading={loading} />
    </AppRoot>
  );
});

export default AppRootNavigator;

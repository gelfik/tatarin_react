import { Epic, Panel, ScreenSpinner, View } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { useMemo } from "react";
import { useNavigation } from "../hooks/navigation";
import TabBarNavigator from "./TabBarNavigator";

const Navigator = observer(({ loading }) => {
  const navigation = useNavigation();

  const popout = useMemo(() => {
    if (loading) {
      return <ScreenSpinner size="large" />;
    } else {
      return null;
    }
  }, [loading]);

  return (
    <Epic activeStory={navigation.activeStory} tabbar={<TabBarNavigator />}>
      <View id={"tests"} activePanel={navigation.activePanel} popout={popout}>
        <Panel id={"default"}>
          Контент панели дефаулт
        </Panel>
      </View>
      <View id={"profile"} activePanel={navigation.activePanel} popout={popout}>
        <Panel id={"default"}>
          Контент панели дефаулт
        </Panel>
      </View>
    </Epic>
  );
});

export default Navigator;

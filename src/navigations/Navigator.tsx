import { Epic, Panel, ScreenSpinner, View } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { useMemo } from "react";
import { useNavigation } from "../hooks/navigation";
import Puzzles from "../panels/puzzles";
import Words from "../panels/words";
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
      <View id={"words"} activePanel={navigation.activePanel} popout={popout}>
        <Panel id={"default"}>
          <Words />
        </Panel>
      </View>
      <View id={"puzzles"} activePanel={navigation.activePanel} popout={popout}>
        <Panel id={"default"}>
          <Puzzles />
        </Panel>
      </View>
    </Epic>
  );
});

export default Navigator;

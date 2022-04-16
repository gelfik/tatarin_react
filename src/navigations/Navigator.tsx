import { Panel, Root, ScreenSpinner, View } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { useMemo } from "react";
import { useNavigation } from "../hooks/navigation";
import Question from "../panels/question";
import Start from "../panels/start";

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
      <Root id={'main'} activeView={navigation.activeStory}>
        <View id={"tests"} activePanel={navigation.activePanel} popout={popout}>
          <Panel id={"default"}>
            <Start />
          </Panel>
          <Panel id={"question_1"}>
            <Question />
          </Panel>
        </View>
        <View id={"profile"} activePanel={navigation.activePanel} popout={popout}>
          <Panel id={"default"}>Контент панели дефаулт</Panel>
        </View>
      </Root>
  );
});

export default Navigator;

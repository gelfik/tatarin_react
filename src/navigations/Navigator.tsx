import { Panel, Root, ScreenSpinner, View } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { useEffect, useMemo } from "react";
import { useStores } from "../hooks/mobx";
import { useNavigation } from "../hooks/navigation";
import { data } from "../models/test";
import Question from "../panels/question";
import Start from "../panels/start";

const Navigator = observer(({ loading }) => {
  const { testStore } = useStores();
  const navigation = useNavigation();

  const popout = useMemo(() => {
    if (loading) {
      return <ScreenSpinner size="large" />;
    } else {
      return null;
    }
  }, [loading]);

  useEffect(() => {
    testStore.loadTest();
    // testStore.setTest(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getQuestionPanels = () => {
    return testStore?.test?.map((item, i) => (
      <Panel key={i} id={`question_${i}`}>
        <Question />
      </Panel>
    ));
  };

  return (
    <Root id={"main"} activeView={navigation.activeStory}>
      <View id={"tests"} activePanel={navigation.activePanel} popout={popout}>
        <Panel id={"default"}>
          <Start />
        </Panel>
        {getQuestionPanels()}
      </View>
      <View id={"profile"} activePanel={navigation.activePanel} popout={popout}>
        <Panel id={"default"}>Контент панели дефаулт</Panel>
      </View>
    </Root>
  );
});

export default Navigator;

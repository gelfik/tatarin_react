import { Group, PanelHeader } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { Fragment } from "react";
import { useNavigation } from "../../hooks/navigation";
import Game from "./game";
import WordsTabs from "./tabs";
import Top from "./top";

const Words = observer(() => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <PanelHeader>Слова</PanelHeader>
      <Group>
        <WordsTabs />
        {navigation.activeTabs === "default" && <Game />}
        {navigation.activeTabs === "top" && <Top />}
      </Group>
    </Fragment>
  );
});

export default Words;

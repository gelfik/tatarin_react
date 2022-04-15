import { Tabs, TabsItem } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { useNavigation } from "../../hooks/navigation";

const WordsTabs = observer(() => {
  const navigation = useNavigation();

  return (
    <Tabs>
      <TabsItem
        onClick={() => navigation.setActiveTabs("default")}
        selected={navigation.activeTabs === "default"}
      >
        Игра
      </TabsItem>
      <TabsItem
        onClick={() => navigation.setActiveTabs("top")}
        selected={navigation.activeTabs === "top"}
      >
        Топ
      </TabsItem>
    </Tabs>
  );
});

export default WordsTabs;

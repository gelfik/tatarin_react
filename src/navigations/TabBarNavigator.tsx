import {
  Icon28ListOutline,
  Icon28UserCircleOutline,
} from "@vkontakte/icons";
import { Tabbar, TabbarItem } from "@vkontakte/vkui";
import { useNavigation } from "../hooks/navigation";
import { observer } from "mobx-react";

const TabBarNavigator = observer(() => {
  const navigation = useNavigation();

  const onStoryChange = (e) =>
    navigation.setActiveStory(e.currentTarget.dataset.story);

  return (
    <Tabbar itemsLayout="vertical">
      <TabbarItem
        onClick={onStoryChange}
        selected={navigation.activeStory === "tests"}
        data-story="tests"
        text="Тесты"
      >
        <Icon28ListOutline />
      </TabbarItem>
      <TabbarItem
        onClick={onStoryChange}
        selected={navigation.activeStory === "profile"}
        data-story="profile"
        text="Профиль"
      >
        <Icon28UserCircleOutline />
      </TabbarItem>
    </Tabbar>
  );
});

export default TabBarNavigator;

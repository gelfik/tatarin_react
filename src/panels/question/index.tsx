import { observer } from "mobx-react";
import { Fragment } from "react";
import "../style.css";
import { useNavigation } from "../../hooks/navigation";
import { ContentCard, PanelHeader } from "@vkontakte/vkui";

const Question = observer(() => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <PanelHeader>Вопрос</PanelHeader>
      <ContentCard
        onClick={() => {}}
        src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
        header="Эчпочмак или Элеш или Чакчак или Кыстыбый или Губадия?"
        text="Тут варианты ответа"
      />
    </Fragment>
  );
});

export default Question;

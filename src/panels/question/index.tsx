import {
  Button,
  Caption,
  Div,
  FixedLayout,
  FormItem,
  FormLayout,
  Group,
  Header,
  Input,
  PanelHeader,
  Radio,
  RadioGroup,
} from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { Fragment } from "react";
import "../style.css";
import { Icon28PlayCircle, Icon28PauseCircle } from "@vkontakte/icons";
import { useStores } from "../../hooks/mobx";
import { useNavigation } from "../../hooks/navigation";

const Question = observer(() => {
  const navigation = useNavigation();
  const { testStore } = useStores();

  const getNexQuestion = (): string => {
    if (testStore.test.length === testStore.index) {
      return "result";
    } else {
      return `question_${testStore.index + 1}`;
    }
  };

  // @ts-ignore
  let lol = new Audio(
    "https://izzibrain.gelfik.dev/media/morgenshtern_-_selyavi_muzati.net.mp3"
  );

  const startPlay = () => {
    lol.play();
  };

  const stopPause = () => {
    lol.pause();
  };

  return (
    <Fragment>
      <PanelHeader>Вопрос {testStore.index + 1}</PanelHeader>
      <Div className={"bg_main_image"}>
        {/*<Div className={"bg_main_image"}>*/}
        <Group
          className={"fill_radioButton"}
          header={<Header>Текст вопроса</Header>}
        >
          <Div className={"inline_objects"}>
            <Caption className={"inline_objects"}>
              <Icon28PlayCircle onClick={startPlay} />
              <Icon28PauseCircle onClick={stopPause} />
            </Caption>
          </Div>
          <FormLayout>
            <FormItem top="Выберите вариант ответа">
              <RadioGroup>
                <Radio name="fit" value="classic">
                  Classic
                </Radio>
                <Radio name="fit" value="regular">
                  Regular
                </Radio>
                <Radio name="fit" value="slim">
                  Slim
                </Radio>
              </RadioGroup>

              <Input type="text" defaultValue="Петров" />
            </FormItem>
          </FormLayout>
        </Group>
        {/*</Div>*/}
        <FixedLayout vertical={"bottom"} style={{ left: 0 }}>
          <Div style={{ marginTop: "auto" }}>
            <Button
              className={"button_width"}
              size={"l"}
              mode={"secondary"}
              onClick={() => {
                testStore.incIndex();
                navigation.setActivePanel(getNexQuestion());
              }}
            >
              Дальше!
            </Button>
          </Div>
        </FixedLayout>
      </Div>
    </Fragment>
  );
});

export default Question;

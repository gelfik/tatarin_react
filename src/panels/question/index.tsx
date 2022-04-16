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

const Question = observer(() => {
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
      <PanelHeader>Вопрос</PanelHeader>
      <Div className={"bg_main_image"}>
        {/*<Div className={"bg_main_image"}>*/}
        <Group
          className={"fill_radioButton"}
          header={<Header>Текст вопроса</Header>}
        >
          <Div style={{ display: "block" }}>
            <Caption>
              Аудиоматериал
              <Icon28PlayCircle onClick={startPlay} />
            </Caption>
            <Icon28PauseCircle onClick={stopPause} />
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
              onClick={() => {}}
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

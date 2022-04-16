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
import { Fragment, useEffect } from "react";
import "../style.css";
import { Icon28PlayCircle, Icon28PauseCircle } from "@vkontakte/icons";
import { useStores } from "../../hooks/mobx";
import { useNavigation } from "../../hooks/navigation";

const Question = observer(() => {
  const navigation = useNavigation();
  const { testStore } = useStores();

  const getNexQuestion = (): void => {
    if (testStore.test.length === testStore.index) {
      navigation.setActivePanel("result");
    } else {
      testStore.incIndex();
      navigation.setActivePanel(`question_${testStore.index}`);
    }
  };

  useEffect(() => {
    if (testStore.activeTest?.audio) {
      testStore.setAudio(testStore.activeTest?.audio);
    } else {
      testStore.setAudioStatus(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testStore.activeTest]);

  const getAnswerList = () => {
    return testStore.activeTest?.answer_list?.map((item, i) => (
      <Radio key={i} name="fit" value="classic">
        {item?.is_text && `${item?.answer}`}
        {item?.is_photo && (
          <img width={100} height={100} src={item?.answerPhoto} alt={""} />
        )}
      </Radio>
    ));
  };

  useEffect(() => {
    console.log(testStore.audioPlayStatus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testStore.audioPlayStatus]);

  return (
    <Fragment>
      <PanelHeader>Вопрос {testStore.index + 1}</PanelHeader>
      <Div className={"bg_main_image"}>
        <Group
          className={"fill_radioButton"}
          header={<Header>{testStore.activeTest?.ask}</Header>}
        >
          <Div className={"inline_objects"}>
            <Caption className={"inline_objects"}>
              {testStore.audioStatus && (
                <>
                  Аудиоматериал
                  {testStore.audioPlayStatus && (
                    <Icon28PauseCircle onClick={testStore.stopAudio} />
                  )}
                  {!testStore.audioPlayStatus && (
                    <Icon28PlayCircle onClick={testStore.playAudio} />
                  )}
                </>
              )}
            </Caption>
          </Div>

          <FormLayout>
            {testStore.activeTest?.answer_list?.length !== 0 && (
              <FormItem top="Выберите вариант ответа">
                <RadioGroup>{getAnswerList()}</RadioGroup>
              </FormItem>
            )}

            {testStore.activeTest?.answer && (
              <FormItem top="Введите ответ">
                <Input type="text" />
              </FormItem>
            )}
          </FormLayout>
        </Group>

        <FixedLayout vertical={"bottom"} style={{ left: 0 }}>
          <Div style={{ marginTop: "auto" }}>
            <Button
              className={"button_width"}
              size={"l"}
              mode={"secondary"}
              onClick={() => getNexQuestion()}
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

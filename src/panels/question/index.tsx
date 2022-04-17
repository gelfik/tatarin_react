import {
  ActionSheet,
  ActionSheetItem,
  Button,
  Caption,
  Div,
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
import { Fragment, useEffect, useRef, useState } from "react";
import "../style.css";
import { Icon28PlayCircle, Icon28PauseCircle } from "@vkontakte/icons";
import { useStores } from "../../hooks/mobx";
import { useNavigation } from "../../hooks/navigation";
import { validateResult } from "../../utils/validateResult";

const Question = observer(() => {
  const navigation = useNavigation();
  const { testStore } = useStores();

  const [value, setValue] = useState("");

  const titleTargetRef = useRef();

  const getNexQuestion = (): void => {
    if (testStore.test.length - 1 === testStore.index) {
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
      <Radio
        onChange={(e) => setValue(e.target.value)}
        key={i}
        name="answer"
        value={item?.answer ? item?.answer : item?.answerPhoto}
      >
        {item?.is_text && `${item?.answer}`}
        {item?.is_photo && (
          <img width={100} height={100} src={item?.answerPhoto} alt={""} />
        )}
      </Radio>
    ));
  };

  useEffect(() => {
    setValue("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testStore.index]);

  return (
    <Fragment>
      <PanelHeader>Вопрос {testStore.index + 1}</PanelHeader>
      <Div className={"bg_main_image"}>
        <Group className={"fill_radioButton"}>
          {testStore.activeTest?.photo && (
            <img
              style={{ width: "100%", height: "100%" }}
              src={testStore.activeTest?.photo}
              alt={testStore.activeTest?.ask}
            />
          )}

          <Header>{testStore.activeTest?.ask}</Header>
          <Div>
            <Caption>
              {testStore.audioStatus && (
                <>
                  Аудиоматериал
                  {testStore.audioPlayStatus && (
                    <Icon28PauseCircle
                      className={"inline_objects"}
                      onClick={testStore.stopAudio}
                    />
                  )}
                  {!testStore.audioPlayStatus && (
                    <Icon28PlayCircle
                      className={"inline_objects"}
                      onClick={testStore.playAudio}
                    />
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
                <Input type="text" onChange={(e) => setValue(e.target.value)} />
              </FormItem>
            )}
          </FormLayout>

          <Div style={{ marginTop: "auto" }}>
            <Button
              className={"button_width"}
              size={"l"}
              mode={"secondary"}
              getRootRef={titleTargetRef}
              onClick={() => {
                testStore.addResult(
                  validateResult(testStore.activeTest, value)
                );
                testStore.setPopout(
                  <ActionSheet
                    onClose={() => {
                      getNexQuestion();
                      testStore.setPopout(null);
                    }}
                    iosCloseItem={
                      <ActionSheetItem autoclose mode="cancel">
                        Отменить
                      </ActionSheetItem>
                    }
                    header={testStore.activeTest.description}
                    toggleRef={titleTargetRef}
                  >
                    <ActionSheetItem autoclose mode="cancel">
                      Перейти к следующему вопросу
                    </ActionSheetItem>
                  </ActionSheet>
                );
              }}
              disabled={value === ""}
            >
              Проверить!
            </Button>
          </Div>
        </Group>
      </Div>
    </Fragment>
  );
});

export default Question;

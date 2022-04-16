import {
  Button,
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

const Question = observer(() => {
  return (
    <Fragment>
      <PanelHeader>Вопрос</PanelHeader>
      <Div className={"bg_main_image"}>
        <Group
          className={"fill_radioButton"}
          header={<Header>Текст вопроса</Header>}
        >
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
      </Div>
      <FixedLayout vertical={"bottom"}>
        <Div>
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
    </Fragment>
  );
});

export default Question;

import {
  Avatar,
  Button,
  ButtonGroup,
  Div,
  FixedLayout,
  Gradient,
  Group,
  PanelHeader,
  Title,
} from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { Fragment } from "react";
import { useStores } from "../../hooks/mobx";

const Result = observer(() => {
  const { testStore, userStore } = useStores();

  const countTrue = (arrayOrElement) =>
    Array.isArray(arrayOrElement)
      ? arrayOrElement.reduce(
          (number, element) => number + countTrue(element),
          0
        )
      : arrayOrElement
      ? 1
      : 0;

  const getResultBall = (): number => {
    return Math.round(
      (countTrue(testStore.result) / testStore.test.length) * 100
    );
  };

  getResultBall();

  return (
    <Fragment>
      <PanelHeader>Результат</PanelHeader>
      <Group>
        <Gradient
          style={{
            margin: "-7px -7px 0 -7px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 100,
            backgroundImage: 'url("../../img/ultramegagood.png")',
          }}
        >
          <Avatar size={200} src={userStore.vkUser.photo_200} />
          <Title
            style={{ marginBottom: 8, marginTop: 20 }}
            level="2"
            weight="2"
          >
            {userStore.vkUser.first_name} {userStore.vkUser.last_name}
          </Title>
          <Title
            style={{ marginBottom: 8, marginTop: 20 }}
            level="2"
            weight="2"
          >
            Ты татарин на {getResultBall()}%
          </Title>
          {/*<Text style={{ marginBottom: 24, color: "var(--text_secondary)" }}>*/}
          {/*  Учащийся*/}
          {/*</Text>*/}
          {/*<Button size="m" mode="secondary">*/}
          {/*  Редактировать*/}
          {/*</Button>*/}
        </Gradient>
      </Group>

      <FixedLayout vertical={"bottom"} style={{ left: 0 }}>
        <Div style={{ marginTop: "auto" }}>
          <ButtonGroup mode="horizontal" gap="m" stretched>
            <Button className={"button_width"} size={"l"} stretched>
              Опубликовать в историю
            </Button>
            <Button className={"button_width"} size={"l"} stretched>
              Поделится с друзьями
            </Button>
          </ButtonGroup>
        </Div>
      </FixedLayout>
    </Fragment>
  );
});

export default Result;

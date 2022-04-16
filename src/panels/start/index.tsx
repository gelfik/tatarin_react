import { observer } from "mobx-react";
import { Button, Div, FixedLayout, Placeholder } from "@vkontakte/vkui";
import { Fragment } from "react";
import "../style.css";
import { useNavigation } from "../../hooks/navigation";
import scullcap from "../../svg/scullcap.svg";

const Start = observer(() => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <Placeholder
        className={"bg_main_image"}
        stretched={true}
        icon={<img className={"icon_size"} src={scullcap} alt={"scullcap"} />}
        header="Кемне күрәм мин!"
      >
        В этом маленьком приложении ты сможешь узнать насколько ты являешься
        ТАТАРИНОМ!
      </Placeholder>
      <FixedLayout vertical={"bottom"}>
        <Div>
          <Button
            className={"button_width"}
            size={"l"}
            mode={"secondary"}
            onClick={() => {
              navigation.setActivePanel("question_0");
            }}
          >
            АЙДА!
          </Button>
        </Div>
      </FixedLayout>
    </Fragment>
  );
});

export default Start;

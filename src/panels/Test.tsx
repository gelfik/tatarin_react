import { Button, Div, PanelHeader } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { useNavigation } from "../hooks/navigation";

const Test = observer(() => {
  const navigation = useNavigation();
  const onClick = () => navigation.setActivePanel("SecondTest");
  return (
    <>
      <PanelHeader>Test</PanelHeader>
      <Div>
        <Button onClick={onClick}>Go to second test</Button>
      </Div>
    </>
  );
});

export default Test;

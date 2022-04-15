import bridge from "@vkontakte/vk-bridge";
import { action, makeAutoObservable } from "mobx";

class VKBridge {
  constructor() {
    makeAutoObservable(this);
  }

  @action getVKUserData = async () => {
    // await bridge
    //   .send("VKWebAppStorageSet", { key: "lela", value: "keka" })
    //   .then((r) => {
    //     console.log(r, ["RESA"]);
    //   });
    // await bridge
    //   .send("VKWebAppStorageGet", { keys: ["lel", "lela"] })
    //   .then((r) => {
    //     r.keys.map((item): number => {
    //       console.log(item);
    //
    //       return 1;
    //     });
    //   });
    return await bridge.send("VKWebAppGetUserInfo");
  };
}

export default VKBridge;

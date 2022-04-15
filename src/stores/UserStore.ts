import {
  action,
  computed,
  makeAutoObservable,
  observable,
  runInAction,
  toJS,
} from "mobx";
import VKBridge from "./VKBridge";
import type { ReceiveData } from "@vkontakte/vk-bridge";

class UserStore {
  vkBridge: VKBridge;

  constructor(vkBridge: VKBridge) {
    this.vkBridge = vkBridge;
    makeAutoObservable(this);
  }

  @observable _vkUser: ReceiveData<"VKWebAppGetUserInfo"> = undefined;

  @action setVKUser = () => {
    return runInAction(async () => {
      this._vkUser = await this.vkBridge.getVKUserData();
    });
  };

  @computed get vkUser() {
    return toJS(this._vkUser);
  }
}

export default UserStore;

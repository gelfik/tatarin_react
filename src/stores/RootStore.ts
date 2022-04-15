import UserStore from "./UserStore";
import VKBridge from "./VKBridge";
import NavigationStore from "./NavigationStore";
import InitializeAxios from "../utils/Axios";
import { AxiosInstance } from "axios";

class RootStore {
  navigation: NavigationStore;
  vkBridge: VKBridge;
  $axios: AxiosInstance;
  userStore: UserStore;

  constructor() {
    this.navigation = new NavigationStore();
    this.vkBridge = new VKBridge();
    this.$axios = InitializeAxios();
    this.userStore = new UserStore(this.vkBridge);
  }
}

export default RootStore;

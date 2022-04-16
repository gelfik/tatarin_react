import TestStore from "./TestStore";
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
  testStore: TestStore;

  constructor() {
    this.$axios = InitializeAxios();
    this.navigation = new NavigationStore();
    this.vkBridge = new VKBridge();
    this.userStore = new UserStore(this.vkBridge);
    this.testStore = new TestStore(this.$axios);
  }
}

export default RootStore;

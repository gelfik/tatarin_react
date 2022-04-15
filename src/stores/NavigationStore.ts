import { action, computed, makeAutoObservable, observable } from "mobx";

type AvailableStory = "profile" | "tests";

enum EAvailableStory {
  profile = "profile",
  tests = "tests",
}

class NavigationStore {
  @observable _activeStory: AvailableStory = "tests";
  @observable _activePanel: object = {};

  constructor() {
    for (let story in EAvailableStory) {
      this._activePanel[story] = "default";
    }
    makeAutoObservable(this);
  }

  @computed get activeStory() {
    return this._activeStory;
  }

  @computed get activePanel() {
    return this._activePanel[this.activeStory];
  }

  @action setActiveStory = (v: AvailableStory) => (this._activeStory = v);
  @action setActivePanel = (v: string) =>
    (this._activePanel[this.activeStory] = v);
}

export default NavigationStore;

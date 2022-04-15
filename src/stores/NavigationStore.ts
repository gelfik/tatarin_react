import { action, computed, makeAutoObservable, observable } from "mobx";

type AvailableStory = "profile" | "words" | "puzzles" | "tests";

enum EAvailableStory {
  profile = "profile",
  words = "words",
  puzzles = "puzzles",
  tests = "tests",
}

class NavigationStore {
  @observable _activeStory: AvailableStory = "words";
  @observable _activePanel: object = {};
  @observable _activeTabs: object = {};

  constructor() {
    for (let story in EAvailableStory) {
      this._activePanel[story] = "default";
    }
    for (let story in EAvailableStory) {
      for (let key in this._activePanel) {
        this._activeTabs[story] = {};
        this._activeTabs[story][this._activePanel[key]] = "default";
      }
    }
    makeAutoObservable(this);
  }

  @computed get activeStory() {
    return this._activeStory;
  }

  @computed get activePanel() {
    return this._activePanel[this.activeStory];
  }
  @computed get activeTabs() {
    return this._activeTabs[this.activeStory][this.activePanel];
  }

  @action setActiveStory = (v: AvailableStory) => (this._activeStory = v);
  @action setActivePanel = (v: string) =>
    (this._activePanel[this.activeStory] = v);
  @action setActiveTabs = (v: string) =>
    (this._activeTabs[this.activeStory][this.activePanel] = v);
}

export default NavigationStore;

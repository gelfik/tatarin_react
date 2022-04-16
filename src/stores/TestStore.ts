import { action, computed, makeAutoObservable, observable, toJS } from "mobx";
import { Test } from "../models/test";
import api from "../api";

class TestStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable _test: Test[] = [];
  @observable _index: number = 0;
  // @ts-ignore
  @observable _audio: HTMLAudioElement = new Audio();
  @observable _audioStatus: boolean = false;
  @observable _audioPlayStatus: boolean = false;

  @action setTest = (test: Test[]) => {
    this._test = test;
  };
  @action setIndex = (index: number) => {
    this._index = index;
  };
  @action incIndex = () => {
    this._index = this._index + 1;
    if (this.audioStatus) {
      this.stopAudio();
    }
    this._audioStatus = false;
    this._audioPlayStatus = false;
  };

  @action setAudio = (src: string) => {
    // @ts-ignore
    this._audio = new Audio(src);
    this._audioStatus = true;
  };
  @action setAudioStatus = (status: boolean) => {
    this._audioStatus = status;
  };
  @action playAudio = () => {
    this._audio.play();
    this._audioPlayStatus = true;
  };
  @action stopAudio = () => {
    this._audio.pause();
    this._audioPlayStatus = false;
  };

  @computed get test() {
    return toJS(this._test);
  }
  @computed get activeTest() {
    return toJS(this._test[this.index]);
  }
  @computed get index() {
    return toJS(this._index);
  }
  @computed get audioStatus() {
    return toJS(this._audioStatus);
  }
  @computed get audioPlayStatus() {
    return toJS(this._audioPlayStatus);
  }

  @action loadTest = (): void => {
    api.test
      .generate_test()
      .then((response) => {
        this.setTest(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default TestStore;

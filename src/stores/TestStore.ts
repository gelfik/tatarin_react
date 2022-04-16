import { AxiosInstance } from "axios";
import { action, computed, makeAutoObservable, observable, toJS } from "mobx";
import { Test } from "../models/test";

class TestStore {
  client: AxiosInstance;

  constructor($client) {
    makeAutoObservable(this);
    this.client = $client;
  }

  @observable _test: Test[] = [];
  @observable _index: number = 0;

  @action setTest = (test: Test[]) => {
    this._test = test;
  };
  @action setIndex = (index: number) => {
    this._index = index;
  };
  @action incIndex = () => {
    this._index = this._index++;
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

  @action loadTest = (): void => {
    this.client
      .get(`/generate_test`)
      .then((response) => {
        this.setTest(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default TestStore;

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

  @action setTest = (test: Test[]) => {
    this._test = test;
  };

  @computed get test() {
    return toJS(this._test);
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

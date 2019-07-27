import { observable, action, computed } from 'mobx';

type AppStatus = 'ready' | 'playing' | 'finished';

type Hist = {
  round: number;
  x1: number;
  x2: number;
  result: number;
  startTime: Date;
  endTime?: Date;
};

class AppStore {
  @observable
  history: Hist[] = [];

  @observable
  status: AppStatus = 'ready';

  @observable
  round: number = 0;

  @observable
  formular = {
    x1: 0,
    x2: 0
  };

  @computed
  get totalTime() {
    return this.history.reduce(
      (acc, it) =>
        acc + (it.endTime!.getTime() - it.startTime.getTime()) / 1000,
      0
    );
  }

  @observable
  result = 0;

  currentStartTime = new Date();

  @action
  reset = () => {
    this.history = [];
    this.round = 0;
    this.formular = { x1: 0, x2: 0 };
    this.result = 0;
    this.currentStartTime = new Date();
  };

  @action
  record = () => {
    console.log('record');
    this.history.push({
      ...this.formular,
      round: this.round,
      result: this.result,
      startTime: this.currentStartTime,
      endTime: new Date()
    });
  };

  @action
  nextCard = () => {
    this.round = this.round + 1;
    this.currentStartTime = new Date();

    this.result = 0;

    this.formular = {
      x1: (Math.random() * 100) | 0,
      x2: (Math.random() * 10) | 0
    };
  };

  @action
  toggle = () => {
    this.round > 0 && this.record();

    if (this.history.length >= 10) {
      this.setStatus('finished');
    } else {
      this.nextCard();
    }
  };

  resetResult = (result: number) => {
    this.result = result;
  };

  construcotr() {}

  setStatus(status: AppStatus) {
    this.status = status;
  }
}

const appStore = new AppStore();
export default appStore;

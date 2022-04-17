import { getClassInstances } from "../utils/miscellaneous/get-class-instances";

interface IAnswerList {
  answer?: string | null;
  answerPhoto?: string | null;
  validStatus: boolean;
  is_text: boolean;
  is_photo: boolean;
}

class AnswerList {
  answer?: string | null;
  answerPhoto?: string | null;
  validStatus: boolean;
  is_text: boolean;
  is_photo: boolean;
}

export interface ITest {
  ask_variant: string;
  ask?: string | null;
  audio?: string | null;
  photo?: string | null;
  is_selected: boolean;
  is_multiple: boolean;
  answer?: string | null;
  answer_list: IAnswerList[];
  description?: string | null;
}

export class Test {
  public readonly ask_variant?: string | null;
  public readonly ask?: string | null;
  public readonly audio?: string | null;
  public readonly photo?: string | null;
  public readonly is_selected: boolean;
  public readonly is_multiple: boolean;
  public readonly answer?: string | null;
  public readonly answer_list: AnswerList[];
  public readonly description?: string | null;

  // public audioFile?: typeof Audio | null;

  public constructor(value: ITest) {
    this.ask_variant = value?.ask_variant;
    this.ask = value?.ask;
    this.audio = value?.audio;
    this.photo = value?.photo;
    this.is_selected = value?.is_selected;
    this.is_multiple = value?.is_multiple;
    this.answer = value?.answer;
    this.answer_list = getClassInstances(AnswerList, value?.answer_list);
    this.description = value?.description;
    // if (this.audio) {
    //   this.audioFile = new Audio(value?.audio);
    // }
  }
}

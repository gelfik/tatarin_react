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
    // if (this.audio) {
    //   this.audioFile = new Audio(value?.audio);
    // }
  }
}

export const data: Test[] = [
  {
    ask_variant: "text",
    ask: "Что из списка не является татарским именем?",
    audio: null,
    photo: "https://izzibrain.gelfik.dev/media/xnc11M6M7p8.jpg",
    is_selected: true,
    is_multiple: false,
    answer: null,
    answer_list: [
      {
        answer: "Айдар",
        answerPhoto: null,
        validStatus: false,
        is_text: true,
        is_photo: false,
      },
      {
        answer: "Айрат",
        answerPhoto: null,
        validStatus: false,
        is_text: true,
        is_photo: false,
      },
      {
        answer: "Айнар",
        answerPhoto: null,
        validStatus: false,
        is_text: true,
        is_photo: false,
      },
      {
        answer: "Айран",
        answerPhoto: null,
        validStatus: true,
        is_text: true,
        is_photo: false,
      },
    ],
  },
  {
    ask_variant: "text",
    ask: "Сколько раз Ак Барс завоёвывал кубок Гагарина?",
    audio: null,
    photo:
      "https://izzibrain.gelfik.dev/media/photo_2022-04-16_16-39-30_wq1aOTU.jpg",
    is_selected: true,
    is_multiple: false,
    answer: null,
    answer_list: [
      {
        answer: "Бер",
        answerPhoto: null,
        validStatus: false,
        is_text: true,
        is_photo: false,
      },
      {
        answer: "Икс",
        answerPhoto: null,
        validStatus: false,
        is_text: true,
        is_photo: false,
      },
      {
        answer: "Три",
        answerPhoto: null,
        validStatus: true,
        is_text: true,
        is_photo: false,
      },
      {
        answer: "Четыре",
        answerPhoto: null,
        validStatus: false,
        is_text: true,
        is_photo: false,
      },
    ],
  },
  {
    ask_variant: "text",
    ask: "Какой подарок традиционно получал главный батыр Сабантуя, победитель в кореш, ещё с испокон времён?",
    audio: null,
    photo: "https://izzibrain.gelfik.dev/media/photo_2022-04-16_17-15-57.jpg",
    is_selected: true,
    is_multiple: false,
    answer: null,
    answer_list: [
      {
        answer: "Липовый сруб",
        answerPhoto: null,
        validStatus: false,
        is_text: true,
        is_photo: false,
      },
      {
        answer: "Выбор невестки",
        answerPhoto: null,
        validStatus: false,
        is_text: true,
        is_photo: false,
      },
      {
        answer: "Баран",
        answerPhoto: null,
        validStatus: true,
        is_text: true,
        is_photo: false,
      },
      {
        answer: "Конь",
        answerPhoto: null,
        validStatus: true,
        is_text: true,
        is_photo: false,
      },
    ],
  },
  {
    ask_variant: "text",
    ask: "Какой вид спорта как национальный вошёл из Сабантуя в состав игр Всемирной Летней Универсиады 2013 года?",
    audio: null,
    photo: "https://izzibrain.gelfik.dev/media/photo_2022-04-16_18-10-56.jpg",
    is_selected: true,
    is_multiple: false,
    answer: null,
    answer_list: [
      {
        answer: "Бег с яйцом во рту",
        answerPhoto: null,
        validStatus: false,
        is_text: true,
        is_photo: false,
      },
      {
        answer: "Бузкаши",
        answerPhoto: null,
        validStatus: false,
        is_text: true,
        is_photo: false,
      },
      {
        answer: "Борьба на поясах",
        answerPhoto: null,
        validStatus: true,
        is_text: true,
        is_photo: false,
      },
      {
        answer: "Бег в мешках",
        answerPhoto: null,
        validStatus: false,
        is_text: true,
        is_photo: false,
      },
    ],
  },
  {
    ask_variant: "text",
    ask: "Чем отличается коймак от каймак?",
    audio: null,
    photo: "https://izzibrain.gelfik.dev/media/photo_2022-04-16_18-12-57.jpg",
    is_selected: true,
    is_multiple: false,
    answer: null,
    answer_list: [
      {
        answer: "Слишком сложно",
        answerPhoto: null,
        validStatus: false,
        is_text: true,
        is_photo: false,
      },
      {
        answer: "Каймак - это блины, коймак - густая сметана",
        answerPhoto: null,
        validStatus: false,
        is_text: true,
        is_photo: false,
      },
      {
        answer: "Коймак - это блины, каймак - это густая сметана.",
        answerPhoto: null,
        validStatus: true,
        is_text: true,
        is_photo: false,
      },
    ],
  },
  {
    ask_variant: "text",
    ask: "Сколько значений имеет татарское слово «басма»? (ответ введите числом)",
    audio: null,
    photo: "https://izzibrain.gelfik.dev/media/photo_2022-04-16_18-28-04.jpg",
    is_selected: false,
    is_multiple: false,
    answer: "4",
    answer_list: [],
  },
  {
    ask_variant: "audio",
    ask: "УДАЛИНТЬ",
    audio:
      "https://izzibrain.gelfik.dev/media/morgenshtern_-_selyavi_muzati.net.mp3",
    photo: null,
    is_selected: false,
    is_multiple: false,
    answer: null,
    answer_list: [],
  },
];

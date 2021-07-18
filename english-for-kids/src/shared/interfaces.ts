export interface ICard {
  _id: string;
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}

export interface ICategory {
  _id: string;
  name: string;
  cards: ICard[];
}

export interface IInitionalState {
  inUpdating: boolean;
  curWord: string;
  curTranslation: string;
  curImage: string;
  curAudioSrc: string;
  itIsNew: boolean;
  isDeleted: boolean;
}

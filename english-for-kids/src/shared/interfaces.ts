export interface Card {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}
export interface ICard extends Card {
  _id: string;
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
  categoryName: string;
  isDeleted: boolean;
}

export interface NavItemProps {
  id?: string;
  value: string;
  path: string;
  onClick?: (event: MouseEvent) => void;
}

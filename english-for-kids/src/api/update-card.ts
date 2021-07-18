import { serverUrl } from '../shared';

export interface IUpdateCard {
  categoryName: string;
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}

const updateCard = async (prevTranslation: string, newCardInfo: IUpdateCard) => {
  const res = await fetch(`${serverUrl.category}`, {
    method: 'PUT',
    body: JSON.stringify({
      prevTranslation,
      newCardInfo,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { data } = await res.json();
  return data as IUpdateCard;
};

export default updateCard;

import { serverUrl } from '../shared';

export interface IUpdateCard {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}

const updateCard = async (id: string, newCardInfo: IUpdateCard) => {
  const res = await fetch(`${serverUrl.card}`, {
    method: 'PUT',
    body: JSON.stringify({
      id,
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

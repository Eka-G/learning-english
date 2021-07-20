import { serverUrl } from '../shared';
import { Card } from '../shared/interfaces';

interface ICreateCard extends Card {
  categoryName: string;
}

const createCard = async ({ categoryName, word, translation, image, audioSrc }: ICreateCard) => {
  const res = await fetch(`${serverUrl.card}`, {
    method: 'POST',
    body: JSON.stringify({
      categoryName,
      word,
      translation,
      image,
      audioSrc,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { data } = await res.json();
  return data as ICreateCard;
};

export default createCard;

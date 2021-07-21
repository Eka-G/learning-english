import { serverUrl, ICard } from '../shared';

const getCard = async (cardId: string) => {
  const res = await fetch(`${serverUrl.card}/${cardId}`);
  const { data } = await res.json();

  return data as ICard;
};

export default getCard;

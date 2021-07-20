import { serverUrl } from '../shared';
import { Card } from '../shared/interfaces';

const updateCard = async (id: string, newCardInfo: Card) => {
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
  return data as Card;
};

export default updateCard;

import { serverUrl } from '../shared';

const deleteCard = async (categoryName: string, id: string) => {
  const res = await fetch(`${serverUrl.card}`, {
    method: 'DELETE',
    body: JSON.stringify({
      categoryName,
      id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { data } = await res.json();
  return data as string;
};

export default deleteCard;

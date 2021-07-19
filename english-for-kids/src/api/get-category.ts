import { serverUrl, ICard } from '../shared';

interface IResult {
  cards: ICard[];
  name: string;
  _id: string;
}

export const CATEGORY_KEY = 'getOneCategory';

const getOneCategory = async (id: string) => {
  const res = await fetch(`${serverUrl.category}`, {
    method: 'GET',
    body: JSON.stringify({
      id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { data } = await res.json();
  return data as IResult;
};

export default getOneCategory;

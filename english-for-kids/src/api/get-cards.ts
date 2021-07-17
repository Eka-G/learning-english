import { serverUrl, ICategory } from '../shared';

export const CARDS_KEY = 'getCards';

const getCards = async (name: string) => {
  const res = await fetch(`${serverUrl.category}?category=${name}`);
  const { data } = await res.json();
  return data[0] as ICategory;
};

export default getCards;

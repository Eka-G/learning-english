import { serverUrl, ICategory } from '../shared';

export const GET_CATEGORY_CARDS = 'getCategoryWithCards';

const getCategoryWithCards = async (categoryName: string) => {
  const res = await fetch(`${serverUrl.category}`);
  const { data } = await res.json();
  return data as ICategory[];
};

export default getCategoryWithCards;

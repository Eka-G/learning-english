import { serverUrl, ICategoryWithoutCards } from '../shared';

export const CATEGORIES_KEY = 'getCategories';

const getCategories = async () => {
  const res = await fetch(`${serverUrl.category}/allWithCards`);
  const { data } = await res.json();
  return data as ICategoryWithoutCards[];
};

export default getCategories;

import { serverUrl } from '../shared';

interface IResult {
  cards: string[];
  name: string;
  _id: string;
}

export const CATEGORIES_KEY = 'getCategories';

const getCategories = async () => {
  const res = await fetch(`${serverUrl.category}/allWithCards`);
  const { data } = await res.json();
  return data as IResult[];
};

export default getCategories;

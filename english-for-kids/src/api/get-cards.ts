import { serverUrl, ICategory } from '../shared';

export const CARDS_KEY = 'getCards';

interface IGetProps {
  name: string;
}

const getCards = async (category: IGetProps) => {
  const res = await fetch(`${serverUrl.category}?category=${category.name}`);
  const { data } = await res.json();
  return data[0] as ICategory;
};

export default getCards;

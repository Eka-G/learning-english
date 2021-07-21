import { serverUrl, ICategory } from '../shared';

export const CATEGORY_KEY = 'getOneCategory';

const getOneCategory = async (id: string) => {
  const res = await fetch(serverUrl.category, {
    method: 'GET',
    body: JSON.stringify({
      id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { data } = await res.json();
  return data as ICategory;
};

export default getOneCategory;

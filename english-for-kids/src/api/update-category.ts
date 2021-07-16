import { serverUrl } from '../shared';

interface IResult {
  cards: string[];
  name: string;
  _id: string;
}

export const UPDATE_CATEGORY_KEY = 'updateCategory';

const updateCategory = async (prevName: string, newName: string) => {
  const res = await fetch(`${serverUrl.category}`, {
    method: 'PUT',
    body: JSON.stringify({
      prevName,
      newName,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { data } = await res.json();
  return data as IResult;
};

export default updateCategory;

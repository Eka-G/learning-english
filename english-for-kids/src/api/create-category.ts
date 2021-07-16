import { serverUrl } from '../shared';

const createCategory = async (name: string) => {
  const res = await fetch(`${serverUrl.category}`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      cards: [],
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { data } = await res.json();
  return data;
};

export default createCategory;

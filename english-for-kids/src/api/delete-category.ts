import { serverUrl } from '../shared';

const deleteCategory = async (name: string) => {
  const res = await fetch(`${serverUrl.category}`, {
    method: 'DELETE',
    body: JSON.stringify({
      name,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { data } = await res.json();
  return data;
};

export default deleteCategory;

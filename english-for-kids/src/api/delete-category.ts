import { serverUrl } from '../shared';

const deleteCategory = async (id: string) => {
  const res = await fetch(`${serverUrl.category}`, {
    method: 'DELETE',
    body: JSON.stringify({
      id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { data } = await res.json();
  return data;
};

export default deleteCategory;

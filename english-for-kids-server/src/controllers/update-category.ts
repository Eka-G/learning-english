import { Category } from '../models';

export default async function updateCategory(prevName: string, newName: string) {
  const res = await Category.updateOne({ name: prevName }, { name: newName });

  if (res.n === 0) throw new Error('there is no such category in the database');

  return res;
}

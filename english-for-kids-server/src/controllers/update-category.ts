import { Category } from '../models';

export default async function updateCategory(id: string, newName: string) {
  const res = await Category.updateOne({ _id: id }, { name: newName });

  if (res.n === 0) throw new Error('there is no such category in the database');

  return res;
}

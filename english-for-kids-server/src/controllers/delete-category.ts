import { Category } from '../models';

export default async function deleteCategory(name: string) {
  const res = await Category.deleteOne({ name });

  if (res.n === 0) throw new Error('there is no such category in the database');

  return res;
}

import { Category } from '../models';

export default async function deleteCategory(id: string) {
  const res = await Category.deleteOne({ _id: id });

  if (res.n === 0) throw new Error('there is no such category in the database');

  return res;
}

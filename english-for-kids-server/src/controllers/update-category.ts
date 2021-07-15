import { Category } from '../models';

export default async function updateCategory(prevName: string, newName: string) {
  const res = await Category.updateOne({ name: prevName }, { name: newName });

  return res;
}

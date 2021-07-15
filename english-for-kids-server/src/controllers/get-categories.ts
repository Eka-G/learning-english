import { Category } from '../models';

export default async function getCategories() {
  const categories = await Category.find({}).populate('cards');

  return categories;
}

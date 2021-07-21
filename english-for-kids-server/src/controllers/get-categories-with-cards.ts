import { Category } from '../models';

export default async function getCategoriesWithCards() {
  const categories = await Category.find({}).populate('cards');

  return categories;
}

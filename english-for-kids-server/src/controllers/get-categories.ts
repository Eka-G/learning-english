import { Category } from '../models';

export default async function getCategories(name?: string) {
  const categories = name ? await Category.find({ name }).populate('cards') : await Category.find({});

  return categories;
}

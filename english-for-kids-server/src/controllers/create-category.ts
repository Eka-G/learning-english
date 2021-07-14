import { ICategory } from '../interfaces/category';
import { Category } from '../models';

const createCategory = async ({ name, cardsId }: ICategory) => {
  const newCategory = new Category({
    name,
    cardsId,
  });

  return newCategory.save();
};

export default createCategory;

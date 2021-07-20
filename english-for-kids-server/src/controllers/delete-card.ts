import { Card, Category } from '../models';

export default async function deleteCard(categoryName: string, id: string) {
  const category = await Category.findOne({ name: categoryName });

  if (!category) return category; // will be null

  const res = await Card.deleteOne({ _id: id });

  if (res.n === 0) throw new Error('there is no such card in the database');

  const newCardsList = category.cards.filter((item) => String(item) !== id);

  await Category.updateOne(
    { name: categoryName },
    {
      cards: newCardsList,
    },
  );

  return res;
}

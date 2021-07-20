import { Card, Category } from '../models';
import { CardInformation } from '../interfaces/cardInfo';

export default async function createCard({ categoryName, word, translation, image, audioSrc }: CardInformation) {
  const category = await Category.findOne({ name: categoryName });

  if (!category) return category; // will be null

  const newCard = new Card({
    word,
    translation,
    image,
    audioSrc,
  });

  await newCard.save();

  category.cards.push(newCard._id);
  await category.save();

  return newCard;
}

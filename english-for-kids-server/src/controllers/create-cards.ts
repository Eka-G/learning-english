import { Card } from '../models';
import { CardInformation } from '../interfaces/cardInfo';

export default async function createCard({ word, translation, image, audioSrc }: CardInformation) {
  const newCard = new Card({
    word,
    translation,
    image,
    audioSrc,
  });

  return newCard.save();
}

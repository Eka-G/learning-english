import { Card } from '../models';
import { CardInformation } from '../interfaces/cardInfo';

export default async function createCard(cardInfo: CardInformation) {
  const newCard = new Card({
    word: cardInfo.word,
    translation: cardInfo.translation,
    image: cardInfo.image,
    audioSrc: cardInfo.audioSrc,
  });

  return newCard.save();
}

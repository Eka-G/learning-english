import { Card } from '../models';
import { CardInformation } from '../interfaces/cardInfo';

export default async function updateCard(id: string, newCardInfo: CardInformation) {
  const res = await Card.findOne({ _id: id }).then((card) => {
    if (!card) return;

    card.word = newCardInfo.word;
    card.translation = newCardInfo.translation;
    card.image = newCardInfo.image;
    card.audioSrc = newCardInfo.audioSrc;
    card.save();
  });

  return res;
}

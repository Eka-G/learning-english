import { Card } from '../models';
import { CardInformation } from '../interfaces/cardInfo';

export default async function updateCard(prevTranslation: string, newCardInfo: CardInformation) {
  const res = await Card.updateOne({ translation: prevTranslation }, newCardInfo);

  if (res.n === 0) throw new Error('there is no such word in the database');

  return res;
}

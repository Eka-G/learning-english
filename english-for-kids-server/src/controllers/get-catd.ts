import { Card } from '../models';

export default async function getCard(id: string) {
  const card = await Card.findOne({ _id: id });

  return card;
}

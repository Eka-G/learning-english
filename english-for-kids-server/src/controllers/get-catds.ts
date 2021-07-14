import { Card } from '../models';

export default async function getCards() {
  const cards = await Card.find({});

  return cards;
}

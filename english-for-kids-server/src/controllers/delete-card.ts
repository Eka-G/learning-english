import { Card } from '../models';

export default async function deleteCard(translation: string) {
  const res = await Card.deleteOne({ translation });

  if (res.n === 0) throw new Error('there is no such card in the database');

  return res;
}

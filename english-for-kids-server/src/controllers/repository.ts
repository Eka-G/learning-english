import { CARDS, CardsInerface, CardInformation } from '../constants';

export function getCardsList(): Promise<CardsInerface> {
  return Promise.resolve(CARDS);
}

export function getCard(card: string): Promise<void> {
  return Promise.resolve(
    Object.values(CARDS).forEach((value) => value.find((item: CardInformation) => item.word === card)),
  );
}

export async function getCategory(category: string): Promise<string | undefined> {
  return 'test';
}

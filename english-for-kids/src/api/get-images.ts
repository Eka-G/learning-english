import { ICategoryWithoutCards } from '../shared';
import getCard from './get-card';

const getImages = async (categoriesInfo: ICategoryWithoutCards[]) => {
  const cardsFirstId = categoriesInfo.reduce((acc: string[], item: ICategoryWithoutCards) => {
    acc.push(item.cards[0]);
    return acc;
  }, []);

  const cards = await Promise.all(
    cardsFirstId.map((id) => {
      if (!id) {
        return undefined;
      }

      return getCard(id);
    }),
  );

  return cards.map(
    (card) =>
      card?.image ?? 'https://res.cloudinary.com/drkkqcud9/image/upload/v1626876508/cards/c0c5757f6ab6942_vr9qju.jpg',
  ) as string[];
};

export default getImages;

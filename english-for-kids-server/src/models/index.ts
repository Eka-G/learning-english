import { model } from 'mongoose';
import cardSchema, { Card as ICard } from './schemes/card.scheme';

export const Card = model<ICard>('Card', cardSchema);

export default {};

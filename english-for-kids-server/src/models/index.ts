import { model } from 'mongoose';
import cardSchema, { Card as ICard } from './schemes/card.scheme';
import categorySchema, { ICategory } from './schemes/category.scheme';

export const Card = model<ICard>('Card', cardSchema);
export const Category = model<ICategory>('Category', categorySchema);

export default {};

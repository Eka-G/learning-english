import { Schema } from 'mongoose';

export interface ICategory {
  name: string;
  cards: Schema.Types.ObjectId[];
}

const categorySchema = new Schema<ICategory>({
  name: String,
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
});

export default categorySchema;

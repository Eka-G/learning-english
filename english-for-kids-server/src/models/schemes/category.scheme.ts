import { Schema } from 'mongoose';

export interface ICategory {
  name: string;
  cardsId: Schema.Types.ObjectId[];
}

const categorySchema = new Schema<ICategory>({
  name: String,
  cardsId: [Schema.Types.ObjectId],
});

export default categorySchema;

import { Schema } from 'mongoose';

export interface Card {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}

const cardSchema = new Schema<Card>({
  word: String,
  translation: String,
  image: String,
  audioSrc: String,
});

export default cardSchema;

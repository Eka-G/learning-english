// import { useState } from 'react';
import Star from '../star';
import './rating-scale.css';

interface RatingProps {
  correct: number;
  error: number;
}

const RatingScale = ({ correct, error }: RatingProps) => {
  const stars = Array.from(Array(correct), (_, i) => <Star key={i} imgPath="star.svg" />);
  const emptyStars = new Array(error).fill(<Star imgPath="empty-star.svg" />);

  return (
    <div className="rating">
      <div className="rating__correct">{stars}</div>
      <span className="rating__text">← Your result →</span>
      <div className="rating__error">{emptyStars}</div>
    </div>
  );
};

export default RatingScale;

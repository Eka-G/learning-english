import { useState } from 'react';
import Star from '../star';
import './rating-scale.css';

const RatingScale = () => {
  const [arrStars, setStar] = useState<JSX.Element[] | []>([]);
  const addStar = () => {
    setStar((arr) => [...arr, <Star imgPath="star.svg" />]);
  };

  const [arrEmptyStars, setEmptyStar] = useState<JSX.Element[] | []>([]);
  const addEmptyStar = () => {
    setEmptyStar((arr) => [...arr, <Star imgPath="empty-star.svg" />]);
  };

  return (
    <div className="rating">
      <div className="rating__correct">{arrStars}</div>
      <span className="rating__text">← Your result →</span>
      <div className="rating__error">{arrEmptyStars}</div>
    </div>
  );
};

export default RatingScale;

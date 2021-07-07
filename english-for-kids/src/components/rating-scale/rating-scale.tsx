// import { useState } from 'react';
import Star from '../star';
import './rating-scale.css';

interface RatingProps {
  correct: number;
  error: number;
}

const RatingScale = ({ correct, error }: RatingProps) => {
  const stars = new Array(correct).fill(<Star imgPath="star.svg" />);
  const emptyStars = new Array(error).fill(<Star imgPath="empty-star.svg" />);
  // const [arrStars, setStar] = useState<JSX.Element[] | []>([]);
  // const addStar = () => {
  //   setStar((arr) => [...arr, <Star imgPath="star.svg" />]);
  // };

  // const [arrEmptyStars, setEmptyStar] = useState<JSX.Element[] | []>([]);
  // const addEmptyStar = () => {
  //   setEmptyStar((arr) => [...arr, <Star imgPath="empty-star.svg" />]);
  // };

  return (
    <div className="rating">
      <div className="rating__correct">{stars}</div>
      <span className="rating__text">← Your result →</span>
      <div className="rating__error">{emptyStars}</div>
    </div>
  );
};

export default RatingScale;

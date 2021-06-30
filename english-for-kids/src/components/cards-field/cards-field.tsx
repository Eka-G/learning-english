import * as React from 'react';
import './cards-field.css';

interface CardsFieldProps {
  children: React.ReactChild | React.ReactChild[];
}

const CardsField: React.FC<CardsFieldProps> = ({ children }: CardsFieldProps) => {
  return <div className="card-field">{children}</div>;
};

export default CardsField;

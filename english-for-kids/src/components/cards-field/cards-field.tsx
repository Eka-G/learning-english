import * as React from 'react';
import './cards-field.css';

interface CardsFieldProps {
  isAdmin: boolean;
  children: React.ReactChild | React.ReactChild[];
}

const CardsField: React.FC<CardsFieldProps> = ({ children, isAdmin }: CardsFieldProps) => {
  return <div className={isAdmin ? 'admin-card-field' : 'card-field'}>{children}</div>;
};

export default CardsField;

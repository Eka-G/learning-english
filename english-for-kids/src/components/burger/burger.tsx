import { MouseEventHandler } from 'react';
import './burger.css';

interface BurgerProps {
  visible: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

function Burger({ visible, onClick }: BurgerProps) {
  const className = visible ? 'burger-menu burger-menu--clicked' : 'burger-menu';
  return (
    <div role="none" className="wrapper-burger-menu" onClick={onClick}>
      <div className={className} />
    </div>
  );
}

export default Burger;

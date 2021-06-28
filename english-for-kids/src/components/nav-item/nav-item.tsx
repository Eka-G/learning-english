import type { NavListProps } from '../../types';
import './nav-item.css';

const NavItem = (props: NavListProps) => {
  const { value } = props;

  return (
    <li key={String(value)} className="nav-item">
      {value}
    </li>
  );
};

export default NavItem;

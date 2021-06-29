import type { NavItemProps } from '../../types';
import './nav-item.css';

const NavItem = (props: NavItemProps) => {
  const { value, active } = props;
  const className = active ? 'nav-item nav-item--active' : 'nav-item';

  return (
    <li key={String(value)} className={className}>
      {value}
    </li>
  );
};

export default NavItem;

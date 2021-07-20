import { Link, useLocation } from 'react-router-dom';
import { NavItemProps } from '../../shared/interfaces';
import './nav-item.css';

const NavItem = (props: NavItemProps) => {
  const { value, path } = props;
  const { pathname } = useLocation();
  const className = path === pathname ? 'nav-item nav-item--active' : 'nav-item';

  return (
    <li className={className}>
      <Link to={path}>{value}</Link>
    </li>
  );
};

export default NavItem;

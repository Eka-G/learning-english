import { Link, useLocation } from 'react-router-dom';
import './nav-item.css';

export interface NavItemProps {
  value: string;
  path: string;
}

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

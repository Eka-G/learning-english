import { CATEGORIES } from '../../constants';
import NavItem from '../nav-item';
import './nav-list.css';

interface NavListProps {
  isAdmin: boolean;
  adminItems: string[] | null;
}

const NavList = ({ isAdmin, adminItems }: NavListProps) => {
  return (
    <>
      {!isAdmin && (
        <ul className="nav-list">
          {Object.entries(CATEGORIES).map((item) => (
            <NavItem key={item[0]} value={item[0]} path={item[1]} />
          ))}
        </ul>
      )}

      {isAdmin && adminItems && (
        <ul className="nav-list admin-nav__list">
          {adminItems.map((item) => (
            <NavItem key={item} value={item} path={`/${item}`} />
          ))}
        </ul>
      )}
    </>
  );
};

export default NavList;

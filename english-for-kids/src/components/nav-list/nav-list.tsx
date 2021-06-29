import { NAV_ITEMS } from '../../constants';
import NavItem from '../nav-item';

const NavList = () => {
  return (
    <ul className="nav-list">
      {Object.entries(NAV_ITEMS).map((item) => (
        <NavItem key={item[0]} value={item[0]} path={item[1]} />
      ))}
    </ul>
  );
};

export default NavList;

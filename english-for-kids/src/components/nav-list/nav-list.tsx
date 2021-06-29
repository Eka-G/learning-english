import type { NavProps } from '../../types';
import NavItem from '../nav-item';

const NavList = (props: NavProps) => {
  const { items, active } = props;
  const ifActive = true;
  const listItems = items.map((item: string) => {
    return item === active ? <NavItem value={item} active={ifActive} /> : <NavItem value={item} />;
  });

  return <ul className="nav-list">{listItems}</ul>;
};

export default NavList;

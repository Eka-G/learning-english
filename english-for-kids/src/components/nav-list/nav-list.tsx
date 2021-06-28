import type { NavProps } from '../../types';
import NavItem from '../nav-item';
import './nav-list.css';

const NavList = (props: NavProps) => {
  const { items } = props;
  const listItems = items.map((item: string) => <NavItem value={item} />);

  return <ul className="nav-list">{listItems}</ul>;
};

export default NavList;

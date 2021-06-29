import NavItem from '../nav-item';

interface NavProps {
  items: string[];
  active: string;
}

const NavList = (props: NavProps) => {
  const { items, active } = props;
  const ifActive = true;
  const listItems = items.map((item: string) => {
    return item === active ? (
      <NavItem key={item} value={item} active={ifActive} />
    ) : (
      <NavItem key={item} value={item} />
    );
  });

  return <ul className="nav-list">{listItems}</ul>;
};

export default NavList;

import './nav-item.css';

export interface NavItemProps {
  value: string;
  active?: boolean;
}

const NavItem = (props: NavItemProps) => {
  const { value, active } = props;
  const className = active ? 'nav-item nav-item--active' : 'nav-item';

  return <li className={className}>{value}</li>;
};

export default NavItem;

import type { NavProps } from '../../types';
import NavList from '../nav-list';
import './nav.css';

function Navigation(props: NavProps) {
  const { items, active } = props;
  return (
    <nav className="nav">
      <NavList items={items} active={active} />
    </nav>
  );
}

export default Navigation;

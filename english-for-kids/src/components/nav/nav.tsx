import type { NavProps } from '../../types';
import NavList from '../nav-list';
import './nav.css';

function Navigation(props: NavProps) {
  const { items } = props;
  return (
    <nav className="nav">
      <NavList items={items} />
    </nav>
  );
}

export default Navigation;

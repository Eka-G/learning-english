import NavList from '../nav-list';
import './nav.css';

interface NavProps {
  items: string[];
  active: string;
  visible: boolean;
}

function Navigation(props: NavProps) {
  const { items, active, visible } = props;
  return (
    <nav className={`nav nav--${visible ? 'active' : 'unactive'}`}>
      <NavList items={items} active={active} />
    </nav>
  );
}

export default Navigation;

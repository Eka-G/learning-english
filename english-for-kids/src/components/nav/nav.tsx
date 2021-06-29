import NavList from '../nav-list';
import './nav.css';

interface NavProps {
  visible: boolean;
}

function Navigation(props: NavProps) {
  const { visible } = props;

  return (
    <nav className={`nav nav--${visible ? 'active' : 'unactive'}`}>
      <NavList />
    </nav>
  );
}

export default Navigation;

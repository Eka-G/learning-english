import NavList from '../nav-list';
import LoginModal from '../login-modal';
import './nav.css';

interface NavProps {
  visible: boolean;
}

function Navigation(props: NavProps) {
  const { visible } = props;
  const app = document.querySelector('.App');
  const height = {
    height: app === null ? '100vh' : app.scrollHeight,
  };

  return (
    <nav className={`nav nav--${visible ? 'active' : 'unactive'}`} style={height}>
      <button type="button" className="nav__login-btn">
        ✎ Log in
      </button>
      <NavList isAdmin={false} adminItems={null} />
      <LoginModal />
    </nav>
  );
}

export default Navigation;

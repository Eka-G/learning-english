import { useState } from 'react';
import NavList from '../nav-list';
import LoginModal from '../login-modal';
import './nav.css';

interface NavProps {
  visible: boolean;
}

function Navigation({ visible }: NavProps) {
  const app = document.querySelector('.App');
  const height = {
    height: app === null ? '100vh' : app.scrollHeight,
  };
  const [visibleModal, openModal] = useState(false);

  return (
    <nav className={`nav nav--${visible ? 'active' : 'unactive'}`} style={height}>
      <button
        type="button"
        className="nav__login-btn"
        onClick={() => {
          openModal(true);
        }}
      >
        ✎ Log in
      </button>
      <NavList isAdmin={false} adminItems={null} />

      {visibleModal && (
        <LoginModal
          onClose={() => {
            openModal(false);
          }}
        />
      )}
    </nav>
  );
}

export default Navigation;

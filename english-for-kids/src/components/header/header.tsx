import { useState } from 'react';
import Burger from '../burger';
import Switcher from '../switch';
import Navigation from '../nav';
import './header.css';

function Header() {
  const [visibleNav, setVisibleNav] = useState(false);

  return (
    <header className="header">
      <Burger visible={visibleNav} onClick={() => setVisibleNav(!visibleNav)} />
      <Switcher />
      <Navigation visible={visibleNav} />
    </header>
  );
}

export default Header;

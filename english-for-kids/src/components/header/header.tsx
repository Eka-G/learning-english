import { useState } from 'react';
import Burger from '../burger';
import Switch from '../switch';
import Navigation from '../nav';
import './header.css';

function Header() {
  const navItems = ['Main', 'Category1', 'Category2', 'Category3', 'Category4'];
  const [visibleNav, setVisibleNav] = useState(false);

  return (
    <header className="header">
      <Burger visible={visibleNav} onClick={() => setVisibleNav(!visibleNav)} />
      <Navigation items={navItems} active="Main" visible={visibleNav} />
      <Switch />
    </header>
  );
}

export default Header;

import Burger from '../burger';
import Switch from '../switch';
import Navigation from '../nav';
import './header.css';

function Header() {
  const navItems = ['Main', 'Category1', 'Category2', 'Category3', 'Category4'];
  return (
    <header className="header">
      <Burger />
      <Switch />
      <Navigation items={navItems} active="Main" />
    </header>
  );
}

export default Header;

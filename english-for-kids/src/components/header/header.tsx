import Burger from '../burger';
import Switch from '../switch';
import Navigation from '../nav';
import './header.css';

function Header() {
  const navItems = ['Main', 'Category1', 'Category2', 'Category3', 'Category4'];
  return (
    <div className="header">
      <Burger />
      <Switch />
      <Navigation items={navItems} />
    </div>
  );
}

export default Header;

import Burger from '../burger';
import Switch from '../switch';
import './header.css';

function Header() {
  return (
    <div className="header">
      <Burger />
      <Switch />
    </div>
  );
}

export default Header;

import './switch.css';

function Switcher() {
  return (
    <label htmlFor="toggle-game" className="switch-label">
      <input id="toggle-game" type="checkbox" className="switch-label__input" />
      <div className="switch-label__circle" />
    </label>
  );
}

export default Switcher;

import { useStateContext } from '../../shared';
import './switch.css';

function Switcher() {
  const { dispatch } = useStateContext();

  return (
    <label htmlFor="toggle-game" className="switch-label">
      <input
        id="toggle-game"
        type="checkbox"
        className="switch-label__input"
        onChange={() => dispatch({ type: 'toggle mode' })}
      />
      <div className="switch-label__circle" />
    </label>
  );
}

export default Switcher;

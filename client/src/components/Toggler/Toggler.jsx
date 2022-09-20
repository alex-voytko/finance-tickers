import { useDispatch } from "react-redux";
import { onToggle } from "../../redux/slice/theme-slice";

import { ReactComponent as SunIcon } from "../../svg/sun.svg";
import { ReactComponent as MoonIcon } from "../../svg/moon.svg";

function Toggler() {
  const dispatch = useDispatch();

  return (
    <div className="toggler-container">
      <input
        type="checkbox"
        id="dark-mode-toggle"
        onChange={(e) => dispatch(onToggle(e.target.checked))}
      />
      <label className="toggle-label" htmlFor="dark-mode-toggle">
        <SunIcon className="sun-icon" />
        <MoonIcon className="moon-icon" />
      </label>
    </div>
  );
}

export default Toggler;

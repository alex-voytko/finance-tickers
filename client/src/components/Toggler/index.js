import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onToggle } from "../../redux/slice/dark-mode-slice";
import { ReactComponent as SunIcon } from "../../svg/sun.svg";
import { ReactComponent as MoonIcon } from "../../svg/moon.svg";

function Toggler() {
  const dispatch = useDispatch();
  const isDarkeModeOn = useSelector((state) => state.darkMode.isDarkeModeOn);
  useEffect(() => {
    const inputRef = document.querySelector("#dark-mode-toggle");
    inputRef.checked = isDarkeModeOn;
    console.log(inputRef);
  }, []);
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

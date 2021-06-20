import React, { useState } from "react";
import "./CountrySwitch.css";

const CountrySwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleCountrySwitch = () => setChecked(!checked);

  return (
    <div className="switch-container">
      <input
        type="checkbox"
        className="checkbox"
        name="country-switch"
        id="country-switch"
        onChange={handleCountrySwitch}
      ></input>
      <label className="checkbox-label" htmlFor="country-switch"></label>
      <div className="switch-subtitle-cont">
        <p className="switch-subtitles">Cities</p>
        <p className="switch-subtitles">Countries</p>
      </div>
    </div>
  );
};

export default CountrySwitch;

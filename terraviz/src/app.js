import React from "react";
import Map from "./components/Map.js";
import CountrySwitch from "./components/CountrySwitch.js";
import "./components/CountrySwitch.css";
import "./app.css";

const App = () => {
  return (
    <div>
      <CountrySwitch />
      <Map />
    </div>
  );
};

export default App;

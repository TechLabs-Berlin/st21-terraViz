import React from "react";
import Map from "./components/Map.js";
import CountrySwitch from "./components/CountrySwitch.js";
import "./components/CountrySwitch.css";
import "./app.css";
import Sidebar from "./components/Sidebar.js"

const App = () => {
  return (
    <div>
      <CountrySwitch />
      <Sidebar />
      <Map />
    </div>
  );
};

export default App;

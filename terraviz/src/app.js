import React from "react";
import Sidebar from "./components/Sidebar.js";
import CountrySwitch from "./components/CountrySwitch.js";
import TimeSlider from "./components/TimeSlider.js";
import Map from "./components/Map.js";
import "./components/CountrySwitch.css";
import "./app.css";

const App = () => {
  return (
    <div>
      <Sidebar />
      <CountrySwitch />
      <TimeSlider />
      <Map />
    </div>
  );
};

export default App;

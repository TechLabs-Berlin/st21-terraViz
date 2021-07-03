import React, { useState } from "react";
import Sidebar from "./components/Sidebar.js";
import CountrySwitch from "./components/CountrySwitch.js";
import TimeSlider from "./components/TimeSlider.js";
import Map from "./components/Map.js";
import "./components/CountrySwitch.css";
import "./app.css";

const App = () => {
  const [currentYear, setCurrentYear] = useState(1902);

  return (
    <div>
      <Sidebar />
      <CountrySwitch />
      <TimeSlider currentYear={currentYear} setCurrentYear={setCurrentYear} />
      <Map currentYear={currentYear} />
    </div>
  );
};

export default App;

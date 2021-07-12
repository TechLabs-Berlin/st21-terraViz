import React, { useState } from "react";
import Sidebar from "./components/Sidebar.js";
import TimeSlider from "./components/TimeSlider.js";
import Map from "./components/Map.js";
import main_logo from "./assets/TerraViz Logo White.png";
import "./app.css";

const App = () => {
  const [currentYear, setCurrentYear] = useState(1902);

  return (
    <div>
      <Sidebar />
      <img className="main_logo" src={main_logo} alt="main-logo" />
      <TimeSlider currentYear={currentYear} setCurrentYear={setCurrentYear} />
      <Map currentYear={currentYear} />
    </div>
  );
};

export default App;

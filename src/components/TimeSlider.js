import React, { useState } from "react";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import "./TimeSlider.css";

const TimeSlider = () => {
  const [currentYear, setCurrentYear] = useState(1750);

  return (
    <div className="slider-main-container">
      <div className="slider-wrapper">
        <input
          type="range"
          min="1750"
          max="2013"
          className="slider-range"
          value={currentYear}
          onChange={(e) => setCurrentYear(e.target.value)}
        />
        <div className="label-wrapper">
          <div className="label-left">1750</div>
          <div className="label-right">2013</div>
        </div>
      </div>

      <button className="button-container">
        <IoIosPlay className="play-button" />
      </button>

      <button className="button-container">
        <IoIosPause className="play-button" />
      </button>

      <div className="current-date">{currentYear}</div>
    </div>
  );
};

export default TimeSlider;

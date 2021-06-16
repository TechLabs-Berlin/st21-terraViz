import React, { useState } from "react";
import { IoIosPlay } from "react-icons/io";
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
          onChange={(e) => setCurrentYear(e.target.value)}
        />
        <div className="label-wrapper">
          <div className="label-left">1750</div>
          <div className="label-right">2013</div>
        </div>
      </div>

      <IoIosPlay className="play-button" />
      <span className="current-date">{currentYear}</span>
    </div>
  );
};

export default TimeSlider;

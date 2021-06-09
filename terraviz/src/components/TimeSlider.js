import React from "react";
import { IoIosPlay } from "react-icons/io";
import "./TimeSlider.css";

const TimeSlider = () => {
  // return <div className="slider-container"></div>;
  return (
    <div className="slider-main-container">
      <div className="slider-wrapper">
        <input type="range" min="1750" max="2013" className="slider-range" />
        <div className="label-wrapper">
          <div className="label-left">1750</div>
          <div className="label-right">2013</div>
        </div>
      </div>

      <IoIosPlay className="play-button" />
      <span className="current-date">1920</span>
    </div>
  );
};

export default TimeSlider;

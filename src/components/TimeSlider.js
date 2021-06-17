import React, { useState } from "react";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import "./TimeSlider.css";

const TimeSlider = () => {
  const [currentYear, setCurrentYear] = useState(1750);
  const [startCounterId, setStartCounterId] = useState(null);

  const handlePlayButton = () => {
    // console.log(currentYear + 1);
    const currentStartCounterId = setInterval(() => {
      setCurrentYear((currentYear) => currentYear + 1);
      if (currentYear === 2013) {
        return;
      }
    }, 1000);

    setStartCounterId(currentStartCounterId);
  };

  const stopCounter = () => {
    clearInterval(startCounterId);
    // console.log("stopped");
  };

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

      <button onClick={handlePlayButton} className="button-container">
        <IoIosPlay className="play-button" />
      </button>

      <button onClick={stopCounter} className="button-container">
        <IoIosPause className="play-button" />
      </button>

      <div className="current-date">{currentYear}</div>
    </div>
  );
};

export default TimeSlider;

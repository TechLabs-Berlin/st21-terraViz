import React, { useState } from "react";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import "./TimeSlider.css";

const TimeSlider = () => {
  const [currentYear, setCurrentYear] = useState(1750);
  const [startCounterId, setStartCounterId] = useState(null);
  const [playButton, setPlayButton] = useState(true);

  const onTogglePlayButton = () => {
    setPlayButton(!playButton);

    // 1. Save the ID of current interval to be able to stop it
    //    with either the pause button, or when the counter reaches 2013.
    // 2. Once we reach 2013, the counting should stop
    //    and the pause button should switch back to play button for a better UX.
    if (playButton === true) {
      const currentStartCounterId = setInterval(() => {
        setCurrentYear((currentYear) => {
          if (currentYear === 2013) {
            clearInterval(startCounterId);
            setPlayButton(true);
            return currentYear;
          }
          return currentYear + 1;
        });
      }, 1000);
      setStartCounterId(currentStartCounterId);
    }

    if (playButton === false) {
      clearInterval(startCounterId);
    }
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
          onChange={(e) => setCurrentYear(parseInt(e.target.value))}
        />
        <div className="label-wrapper">
          <div className="label-left">1750</div>
          <div className="label-right">2013</div>
        </div>
      </div>

      <button onClick={onTogglePlayButton} className="button-container">
        <IoIosPlay
          className={playButton ? "play-pause-button" : "button-hidden"}
        />
        <IoIosPause
          className={playButton ? "button-hidden" : "play-pause-button"}
        />
      </button>

      <div className="current-date">{currentYear}</div>
    </div>
  );
};

export default TimeSlider;

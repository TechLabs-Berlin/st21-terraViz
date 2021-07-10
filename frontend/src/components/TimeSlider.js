import React, { useState } from "react";
import { IoIosPlay, IoIosPause, IoIosRedo } from "react-icons/io";
import "./TimeSlider.css";

const PLAY_SPEED = 500;

const TimeSlider = (props) => {
  const { currentYear, setCurrentYear } = props;
  const [startCounterId, setStartCounterId] = useState(null);
  const [playButton, setPlayButton] = useState(true);

  const resetSlider = () => {
    clearInterval(startCounterId);
    setStartCounterId(null);
    setPlayButton(true);
    setCurrentYear(1902);
  }
 

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
            setPlayButton(false);
            return currentYear;
          }
          return currentYear + 1;
        });
      }, PLAY_SPEED);
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
          min="1902"
          max="2013"
          className="slider-range"
          value={currentYear}
          onChange={(e) => setCurrentYear(parseInt(e.target.value))}
        />
        <div className="label-wrapper">
          <div className="label-left">1902</div>
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
      <button onClick={resetSlider} className="button-container"><IoIosRedo className = "play-pause-button" />
      </button>

      <div className="current-date">{currentYear}</div>
    </div>
  );
};

export default TimeSlider;

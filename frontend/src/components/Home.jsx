import React, { useState, useEffect } from "react";

function Home() {
  const [totalAppOpenings, setTotalAppOpenings] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);

  useEffect(() => {
    // Check if localStorage has a value for totalAppOpenings
    const storedOpenings = localStorage.getItem("totalAppOpenings");
    const openings = storedOpenings ? parseInt(storedOpenings) : 0;
    setTotalAppOpenings(openings);

    // Clean up function to clear the timer interval when component unmounts
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prevSeconds) => {
          if (prevSeconds <= 0) {
            clearInterval(interval);
            setTimerRunning(false);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const startTimer = (durationInSeconds) => {
    setTimerSeconds(durationInSeconds);
    setTimerRunning(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value);
    setSliderPosition(newValue);
  };

  const handleSliderRelease = () => {
    if (sliderPosition) {
      setSliderPosition(0);
    }
    if (sliderPosition > 90) {
      setSliderPosition(0); // Reset slider position to 0%
      setTimerSeconds(0); // Reset timer
      setTimerRunning(false); // Stop timer
    }
  };

  return (
    <div>
      <div className="bg-gray-100">
        <div className="p-7 h-52">
          <h1 className="text-2xl mb-2 font-serif">
            Welcome to keep your
            <br />
            <i>Focus pure</i>
          </h1>
          <p>
            <b className="text-xl">{totalAppOpenings}</b>
            <br /> Total Openings
          </p>
        </div>
      </div>
      <main>
        <p className="flex flex-col items-center text-center p-32 text-5xl">
          {formatTime(timerSeconds)}
        </p>
        <div className="flex flex-row justify-center gap-5">
          <button
            className="bg-blue-400 p-2 rounded-md hover:bg-blue-500 transition-all"
            onClick={() => startTimer(300)}
          >
            5 Minutes
          </button>
          <button
            className="bg-blue-400 p-2 rounded-md hover:bg-blue-500 transition-all"
            onClick={() => startTimer(900)}
          >
            15 Minutes
          </button>
          <button
            className="bg-blue-400 p-2 rounded-md hover:bg-blue-500 transition-all"
            onClick={() => startTimer(1500)}
          >
            25 Minutes
          </button>
        </div>
        <div className="flex justify-center items-center mt-8">
          <input
            className="w-4/6 appearance-none bg-gray-200 h-12 rounded-full outline-none slider"
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
            onMouseUp={handleSliderRelease}
            style={{
              background: `linear-gradient(to right, #3182ce 10%, #3182ce ${sliderPosition}%, #d1d5db ${sliderPosition}%, #d1d5db 100%)`,
              transition: "all 5s ease-in-out", // Add transition effect
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default Home;

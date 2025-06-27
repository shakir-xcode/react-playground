import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [ms, setMs] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const stopwatchRef = useRef(0);

  const seconds = Math.floor(ms / 1000)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const hours = Math.floor(minutes / 60)
    .toString()
    .padStart(2, "0");

  const milliSeconds = Math.floor((ms % 1000) / 10)
    .toString()
    .padStart(2, "0");

  const start = () => {
    console.log("started...");

    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    stopwatchRef.current = Date.now() - ms;
    const msId = setInterval(() => {
      setMs(Date.now() - stopwatchRef.current);
    }, 10);

    setIntervalId(msId);
  };

  const stop = () => {
    console.log("stopped");

    clearInterval(intervalId);
    setIntervalId(null);
  };

  const reset = () => {
    stop();
    setMs(0);
  };

  return (
    <div>
      <h2>Stop Watch</h2>
      <div className="text-[7rem] ">
        {hours} : {minutes} : {seconds} : {milliSeconds}
      </div>
      <div className="mt-4 flex gap-3">
        <button onClick={stop} className="text-white">
          Stop
        </button>
        <button
          disabled={intervalId ? true : false}
          onClick={start}
          className="text-white"
        >
          Start
        </button>
        <button onClick={reset} className="text-white">
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;

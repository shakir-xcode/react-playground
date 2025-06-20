import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const makeProgress = () => {
    if (progress >= 100) setProgress(0);
    const id = setInterval(() => {
      setProgress((pre) => {
        if (pre === 100) {
          clearInterval(id);
          return pre;
        }
        return pre + 1;
      });
    }, 100);
  };
  return (
    <div>
      <h1>ProgressBar</h1>

      <div className="relative h-[30px] w-[300px] border bg-slate-300">
        <div
          className={`absolute top-0 left-[50%] 
        translate-x-[-50%] translate-y-[8%] 
        h-[100%] z-10 font-semibold
        ${progress < 50 ? "text-white" : "text-black"}
        `}
        >
          {progress} %
        </div>
        <div
          style={{ width: progress + "%" }}
          className={`absolute top-0 h-[100%] z-0 bg-green-500`}
        />
      </div>
      <button className="text-white" onClick={makeProgress}>
        start
      </button>
    </div>
  );
};

export default ProgressBar;

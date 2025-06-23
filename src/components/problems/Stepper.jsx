import React, { useState } from "react";

const STEP_COUNT = 3;
const PROGRESS_STEP_WIDTH = 100 / STEP_COUNT;

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progressLength, setProgressLength] = useState(0);
  const [completed, setCompleted] = useState(0);

  const updateProgress = (step) => {
    const num = PROGRESS_STEP_WIDTH * (step - 1);
    setProgressLength(num);
  };

  const incrementStep = () => {
    if (currentStep === STEP_COUNT + 2) return;
    setCurrentStep((value) => {
      setCompleted(value);
      // Don't increment the progress bar if at last step
      if (value + 1 <= STEP_COUNT + 1) updateProgress(value + 1);

      return value + 1;
    });
  };

  return (
    <div>
      <h2>Stepper</h2>

      <div className="relative flex justify-between items-center mt-5 w-[440px] border overflow-hidden">
        <div
          style={{ width: `${progressLength}%` }}
          className={`absolute -z-10 h-[6px] translate-x-[0px] bg-green-400 transition-all duration-[600ms]
            `}
        />

        {[...Array(STEP_COUNT + 1)].map((_, index) => {
          return (
            <div
              key={index}
              className={` w-[32px] h-[32px] 
                ${
                  index === currentStep - 1
                    ? "bg-blue-400"
                    : index <= completed
                    ? "bg-green-400"
                    : "border border-slate-300"
                }  rounded-full flex justify-center items-center`}
            >
              {index + 1 <= completed ? "✔" : index + 1}
            </div>
          );
        })}
      </div>

      <button onClick={incrementStep} className="text-white mt-3 self-center ">
        Next
      </button>
    </div>
  );
};

export default Stepper;

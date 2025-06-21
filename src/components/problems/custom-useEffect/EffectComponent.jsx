import React, { useEffect, useState } from "react";
import useCustomEffect from "./useCustomEffect";

const EffectComponent = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(100);

  useCustomEffect(() => {
    console.log("inside useEffect ....");
    return () => {
      console.log("Cleanup ...");
    };
  }, [counter1, counter2]);

  return (
    <div>
      <h2>Effect Component</h2>
      <p>{counter1}</p>
      <button
        className="text-white"
        onClick={() => setCounter1((pre) => pre + 1)}
      >
        increment
      </button>

      <p>{counter2}</p>
      <button
        className="text-white"
        onClick={() => setCounter2((pre) => pre - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default EffectComponent;

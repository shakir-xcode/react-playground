import React, { useState } from "react";
import useCustomMemo from "./useCustomMemo";

const MemoComponent = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const handleIncrement = () => {
    setCounter((pre) => pre + 1);
  };

  const handleDecrement = () => {
    setCounter2((pre) => pre - 1);
  };

  const memoizedCal = useCustomMemo(() => {
    console.log("Expensive function");
    return counter * counter;
  }, [counter]);

  return (
    <div>
      <h2>MemoComponent</h2>

      <p>{counter}</p>
      <p>{memoizedCal}</p>
      <button onClick={handleIncrement} className="text-white">
        Increment
      </button>

      <p>{counter2}</p>
      <button onClick={handleDecrement} className="text-white">
        Increment
      </button>
    </div>
  );
};

export default MemoComponent;

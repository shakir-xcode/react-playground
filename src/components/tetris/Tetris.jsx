import React, { useEffect, useState } from "react";
import boxIndices, { start, boxStateStore } from "./driver";

const Tetris = () => {
  return (
    <div className=" max-w-3xl mx-auto">
      <h1>Tetris</h1>
      <div>
        <Grid />
      </div>
    </div>
  );
};

const Grid = () => {
  const [gridState, setGridState] = useState([]);

  useEffect(() => {
    setGridState(boxIndices);
    start();
  }, []);

  return (
    <div className="max-w-[500px] h-[500px] border border-black flex  flex-wrap">
      {gridState.map((boxValue, index) => (
        <GridBox
          key={index}
          index={index}
          // isActive={boxValue}
        />
      ))}
    </div>
  );
};

const GridBox = ({ index }) => {
  const [isActive, setIsActive] = useState(0);
  useEffect(() => {
    boxStateStore(index, setIsActive);
  }, []);
  console.log("Box rendered");
  return (
    <div
      className={`w-[10%] h-[10.9%]  ${
        isActive
          ? "bg-red-500 outline outline-1 outline-white"
          : "bg-transparent"
      }`}
    ></div>
  );
};

export default Tetris;

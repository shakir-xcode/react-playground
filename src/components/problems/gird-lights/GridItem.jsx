import React from "react";

const GridItem = ({ active, handleClick, index }) => {
  return (
    <div
      onClick={() => handleClick(index)}
      className={`w-[100px] h-[100px] border border-black
        ${active ? "bg-green-500" : "bg-transparent"}
        `}
    />
  );
};

export default GridItem;

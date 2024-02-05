import React, { useState } from "react";

const Boxes = () => {
  const [color, setColor] = useState([false, false, false, false]);
  const chgColor = (index) => {
    setColor(() => {
      const updatedColors = [false, false, false, false];
      updatedColors[index] = true;
      return updatedColors;
    });
  };
  return (
    <div className="flex flex-col gap-2 m-3">
      {color.map((col, index) => (
        <Box chgColor={chgColor} color={col} index={index} />
      ))}
    </div>
  );
};

const Box = ({ chgColor, color, index }) => {
  //   const [color, setColor] = useState(false);
  console.log("box rendered");
  return (
    <div
      onClick={() => {
        chgColor(index);
      }}
      className={`w-[100px] h-[100px] ${color ? "bg-red-500" : "bg-green-500"}`}
    ></div>
  );
};

export default Boxes;

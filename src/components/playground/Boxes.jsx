import React, { useCallback, useState, memo } from "react";

const Boxes = () => {
  const [color, setColor] = useState([false, false, false, false]);
  const chgColor = useCallback((index) => {
    setColor(() => {
      const updatedColors = [false, false, false, false];
      updatedColors[index] = true;
      return updatedColors;
    });
  }
, []);
  return (
    <div className="flex flex-col gap-2 m-3">
      {/* {color.map((col, index) => ( */}
        <Box chgColor={chgColor} color={color[0]} index={0} />
        <Box chgColor={chgColor} color={color[1]} index={1} />
        <Box chgColor={chgColor} color={color[2]} index={2} />
        <Box chgColor={chgColor} color={color[3]} index={3} />
      {/* ))} */}
    </div>
  );
};

const Box = memo(({ chgColor, color, index }) => {
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
}
)

export default Boxes;

import React, { useState, useEffect, useRef } from "react";
import { TERM_ACTIVE, TERM_INACTIVE } from "../config/constants";

const Gate = ({ title, instance, playArea }) => {
  console.log("rendered");
  const GATE = useRef(null);
  const [inputOne, setInputOne] = useState(GATE.current?.inputOne);
  const [inputTwo, setInputTwo] = useState(GATE.current?.inputTwo);
  const [output, setOutput] = useState(GATE.current?.output);
  const [refresh, setRefresh] = useState(false);
  const termCircleSize = 10;

  // -----------------------------------

  const containerRect = playArea.current.getBoundingClientRect();

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({
    x: containerRect.x,
    y: containerRect.y,
  });
  const draggableRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    if (draggableRef.current) {
      setIsDragging(true);
      const { left, top } = draggableRef.current.getBoundingClientRect();
      offset.current = {
        x: event.clientX - left,
        y: event.clientY - top,
      };
    }
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const minX = 0;
      const minY = 0;
      const maxX = containerRect.width - draggableRef.current.offsetWidth;
      const maxY = containerRect.height - draggableRef.current.offsetHeight;

      let newX = event.clientX - offset.current.x - containerRect.left;
      let newY = event.clientY - offset.current.y - containerRect.top;

      // Keep draggable component within container boundaries
      newX = Math.max(minX, Math.min(newX, maxX));
      newY = Math.max(minY, Math.min(newY, maxY));

      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // ------------------------------------------------------

  useEffect(() => {
    GATE.current = instance;
  }, []);

  useEffect(() => {
    const { inputOne, inputTwo, output } = GATE.current.getAllState();
    setInputOne(inputOne);
    setInputTwo(inputTwo);
    setOutput(output);
  }, [refresh]);

  return (
    <div
      ref={draggableRef}
      style={{
        left: position.x,
        top: position.y,
      }}
      className={`absolute ${isDragging ? " cursor-grabbing" : " cursor-grab"}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className=" relative flex border-2 rounded-md border-black  w-fit">
        {/* input terminal one */}
        <div className=" absolute  top-[20%] -left-7 w-7 h-[0px] border border-black">
          <div
            title="input 1"
            onClick={() => {
              GATE.current.toggleInputOne();
              GATE.current.calculateOutput();
              setRefresh((value) => !value);
            }}
            className={` absolute -top-[${
              termCircleSize / 2
            }px] -left-1 cursor-pointer p-1 rounded-full border border-slate-600 ${
              inputOne ? TERM_ACTIVE : TERM_INACTIVE
            } w-[${termCircleSize}px] h-[${termCircleSize}px]`}
          ></div>
        </div>
        {/* input terminal two */}
        <div className=" absolute  bottom-[20%] -left-7 w-7 h-[0px] border border-black">
          <div
            title="input 2"
            onClick={() => {
              GATE.current.toggleInputTwo();
              GATE.current.calculateOutput();
              setRefresh((value) => !value);
            }}
            className={`absolute -top-[${
              termCircleSize / 2
            }px]  -left-1 cursor-pointer p-1 rounded-full border border-slate-600 ${
              inputTwo ? TERM_ACTIVE : TERM_INACTIVE
            } w-[${termCircleSize}px] h-[${termCircleSize}px]`}
          ></div>
        </div>
        <p className=" font-bold m-3 select-none">{title}</p>

        {/* output terminal */}
        <div className=" absolute  top-[50%] -right-7 w-7 h-[0px] border border-black">
          <div
            title="output"
            className={` absolute -top-[${
              termCircleSize / 2
            }px] -right-1 p-1 rounded-full  border border-slate-600 ${
              output ? "bg-green-500" : "bg-white"
            } w-[${termCircleSize}px] h-[${termCircleSize}px]`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Gate;

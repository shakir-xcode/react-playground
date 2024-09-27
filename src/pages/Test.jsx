import React, { useEffect, useRef, useState } from "react";
import { createAND } from "../components/logic sim/logic of gates/And";
import { createOR } from "../components/logic sim/logic of gates/Or";
import Gate from "../components/logic sim/ui/Gate";
import { createNAND } from "../components/logic sim/logic of gates/Nand";
import { createNOR } from "../components/logic sim/logic of gates/Nor";
import { createXOR } from "../components/logic sim/logic of gates/Xor";
import { createNOT } from "../components/logic sim/logic of gates/Not";
import NotGate from "../components/logic sim/ui/NotGate";
import PlayArea from "../components/logic sim/ui/PlayArea";

export const DraggableComponent = ({ playArea }) => {
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

  return (
    <div
      ref={draggableRef}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: isDragging ? "grabbing" : "grab",
        width: "100px",
        height: "100px",
        backgroundColor: "lightblue",
        border: "2px solid blue",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      Drag me around
    </div>
  );
};

const Test = () => {
  return (
    <div className="p-4">
      <PlayArea />
      {/* <DraggableComponent /> */}
      {/* <Gate title="AND" instance={createAND()} /> */}
    </div>
  );
};

export default Test;

import React, { useEffect, useRef, useState } from "react";
import Gate from "./Gate";
import NotGate from "./NotGate";
import { createAND } from "../logic of gates/And";
import { createOR } from "../logic of gates/Or";
import { DraggableComponent } from "../../../pages/Test";

const PlayArea = () => {
  const areaRef = useRef();
  const [areaRefState, setAreaRefState] = useState(null);
  const rectClicked = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(rect.x, rect.y);
    console.log(event.clientX, event.clientY);
    // console.log(`Clicked at (${x}, ${y}) inside the rectangle.`);
  };

  useEffect(() => {
    setAreaRefState(areaRef);
  }, []);

  return (
    <div
      //   onClick={rectClicked}
      ref={areaRef}
      className="relative px-8 py-2 w-[450px] h-[300px] outline outline-1 outline-black"
    >
      {/* <DraggableComponent playArea={areaRef} /> */}
      {areaRefState?.current && (
        <Gate title="AND" instance={createAND()} playArea={areaRef} />
      )}
      {/* <div
        onClick={rectClicked}
        className="absolute w-5 h-5 bg-red-500 top-[50px] left-[70px] "
      ></div> */}
    </div>
  );
};

export default PlayArea;

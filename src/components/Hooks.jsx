import React, { useRef } from "react";

const Hooks = () => {
  const myref = useRef();

  return (
    <div>
      <div ref={myref} className="w-[300px] h-[300px] bg-teal-500 "></div>
    </div>
  );
};

export default Hooks;

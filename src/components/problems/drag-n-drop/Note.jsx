import React from "react";

const Note = ({ note, handleMouseDown }) => {
  const { data, top, left } = note;

  return (
    <div
      style={{
        top: top + "px",
        left: left + "px",
      }}
      className={`absolute w-fit p-4 flex gap-2 justify-start 
        items-start bg-cyan-100 select-none cursor-pointer`}
      onMouseDown={handleMouseDown}
    >
      <div>📝</div>
      <p>{data}</p>
    </div>
  );
};

export default Note;
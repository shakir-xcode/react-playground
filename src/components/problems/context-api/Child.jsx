import React, { useContext } from "react";
import { DataContext } from "./contextData";

const Child = () => {
  const dataCtx = useContext(DataContext);

  return (
    <div className="p-4 border border-black">
      Child
      <div>Context Data : {dataCtx.data.toString()}</div>
      <button
        onClick={() => dataCtx.setData((value) => !value)}
        className="text-white"
      >
        Change Context Data
      </button>
    </div>
  );
};

export default Child;

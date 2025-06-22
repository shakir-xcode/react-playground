import React, { useContext } from "react";
import Child from "./Child";
import { DataContext } from "./contextData";

const Parent = () => {
  const dataCtx = useContext(DataContext);

  return (
    <div className="p-5 border border-black">
      Parent
      <div>Context Data : {dataCtx.data.toString()}</div>
      <button
        onClick={() => dataCtx.setData((value) => !value)}
        className="text-white"
      >
        Change Context Data
      </button>
      <Child />
    </div>
  );
};

export default Parent;

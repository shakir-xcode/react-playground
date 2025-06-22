import React, { useContext } from "react";
import DataContextProvider, { DataContext } from "./contextData";
import Parent from "./Parent";

const GrandParent = () => {
  return (
    <DataContextProvider>
      <div className="p-5 border border-black">
        GrandParent
        <Parent />
      </div>
    </DataContextProvider>
  );
};

export default GrandParent;

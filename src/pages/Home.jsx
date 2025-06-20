import React from "react";
import MemoComponent from "../components/problems/custom-useMemo/MemoComponent";

const Home = () => {
  return (
    <div>
      <h1>This is homepage</h1>
      <div className="my-6" />
      <MemoComponent />
    </div>
  );
};

export default Home;

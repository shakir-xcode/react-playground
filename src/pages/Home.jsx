import React from "react";
import Pagination from "../components/problems/pagination/Pagination";
import StopWatch from "../components/problems/stopwatch/StopWatch";

const Home = () => {
  return (
    <div>
      <h1>This is homepage</h1>
      <div className="my-6" />
      <StopWatch />
    </div>
  );
};

export default Home;

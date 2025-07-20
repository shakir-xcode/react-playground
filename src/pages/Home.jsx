import React from "react";
import FetchHookContainer from "../components/problems/custom-hooks/use-fetch/FetchHookContainer";
const Home = () => {
  return (
    <div>
      <h1>This is homepage</h1>
      <div className="my-6" />
      <FetchHookContainer />
    </div>
  );
};

export default Home;

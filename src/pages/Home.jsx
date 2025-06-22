import React from "react";
import EffectComponent from "../components/problems/custom-useEffect/EffectComponent";
import GrandParent from "../components/problems/context-api/GrandParent";

const Home = () => {
  return (
    <div>
      <h1>This is homepage</h1>
      <div className="my-6" />
      <GrandParent />
    </div>
  );
};

export default Home;

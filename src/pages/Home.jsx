import React from "react";
import LikeButton from "../components/problems/like-btn/LikeButton";
import ButtonContainer from "../components/problems/like-btn/ButtonContainer";
import EffectComponent from "../components/problems/custom-useEffect/EffectComponent";

const Home = () => {
  return (
    <div>
      <h1>This is homepage</h1>
      <div className="my-6" />
      <EffectComponent />
    </div>
  );
};

export default Home;

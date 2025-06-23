import React from "react";
import OtpGenerator from "../components/problems/otp-generator/OtpGenerator";
import Stepper from "../components/problems/Stepper";

const Home = () => {
  return (
    <div>
      <h1>This is homepage</h1>
      <div className="my-6" />
      <Stepper />
    </div>
  );
};

export default Home;

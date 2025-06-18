import React from "react";
import Example1 from "../components/playground/Example1";
import AllFolders from "../components/problems/explorer/AllFolders";
import Folder from "../components/problems/explorer/Folder";
import Test from "../components/problems/explorer/Test";
const Home = () => {
  return (
    <div>
      <h1>This is homepage</h1>
      <AllFolders />
    </div>
  );
};

export default Home;

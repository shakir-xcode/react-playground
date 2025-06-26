import React from "react";
import Products from "../components/problems/throttling/Products";
import SelectableGrid from "../components/problems/SelectableGrid";
import LazyContainer from "../components/problems/lazyLoading/LazyContainer";

const Home = () => {
  return (
    <div>
      <h1>This is homepage</h1>
      <div className="my-6" />
      <LazyContainer />
    </div>
  );
};

export default Home;

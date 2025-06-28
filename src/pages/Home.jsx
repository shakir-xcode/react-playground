import React from "react";
import InfiniteScroller from "../components/problems/infinite-scroll/InfiniteScroller";
import InfiniteScrollerSecond from "../components/problems/infinite-scroll/InfiniteScrollerSecond";

const Home = () => {
  return (
    <div>
      <h1>This is homepage</h1>
      <div className="my-6" />
      <InfiniteScrollerSecond />
    </div>
  );
};

export default Home;

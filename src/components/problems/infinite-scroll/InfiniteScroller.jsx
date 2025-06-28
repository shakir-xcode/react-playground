import React, { useState } from "react";

const BOTTOM_LIMIT = 20;

const dummyData = [...Array(10)];

const InfiniteScroller = () => {
  const [data, setData] = useState([...Array(15)]);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    console.log("load more");
    setLoading(true);
    setTimeout(() => {
      setData((value) => [...value, ...dummyData]);
      setLoading(false);
    }, 1000);
  };

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const scrollHeight = e.target.scrollHeight;
    const clientHeight = e.target.clientHeight;

    if (scrollHeight - (scrollTop + clientHeight) <= BOTTOM_LIMIT && !loading) {
      console.log("here...");
      loadMore();
    }
    // console.log(e.target.clientHeight);
  };

  return (
    <div>
      <h2>Infinite Scroller</h2>

      <div onScroll={handleScroll} className="h-[300px] overflow-auto">
        {data.map((_, i) => (
          <p key={i} className="text-lg font-semibold border-b py-1 px-2">
            {i + 1}
          </p>
        ))}
      </div>
      <div>{loading && <p>Loading...</p>}</div>
    </div>
  );
};

export default InfiniteScroller;

import React, { useEffect, useRef, useState } from "react";

const BOTTOM_LIMIT = 20;

const dummyData = [...Array(10)];

const InfiniteScrollerSecond = () => {
  const [data, setData] = useState([...Array(10)]);
  const [loading, setLoading] = useState(false);
  const parentRef = useRef();
  //   const targetRefList = useRef([]);
  const targetRefList = useRef();

  useEffect(() => {
    // const lastItem = targetRefList.current?.at(-1);

    const observerOptions = {
      root: parentRef.current,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        observer.unobserve(entries[0].target);
        console.log("intersecting...");
        !loading && loadMore();
      }
    }, observerOptions);

    // observer.observe(lastItem);
    observer.observe(targetRefList.current);

    return () => {
      observer.disconnect();
    };
  }, [data.length]);

  const loadMore = () => {
    console.log("load more");
    setLoading(true);
    setTimeout(() => {
      setData((value) => [...value, ...dummyData]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h2>Infinite Scroller using Intersection Observer API</h2>

      <div ref={parentRef} className="h-[300px] overflow-auto">
        {data.map((_, i) => (
          <p
            key={i}
            // ref={(item) => (targetRefList.current[i] = item)}
            ref={i === data.length - 1 ? targetRefList : null}
            className="text-lg font-semibold border-b py-1 px-2"
          >
            {i + 1}
          </p>
        ))}
      </div>
      <div>{loading && <p>Loading...</p>}</div>
    </div>
  );
};

export default InfiniteScrollerSecond;

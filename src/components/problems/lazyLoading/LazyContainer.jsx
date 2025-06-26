import React, { Suspense } from "react";
// import LazyComponent from "./LazyComponent";

const Loading = () => {
  return <p>Loading...</p>;
};

const delayedLoading = async (cmp) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return cmp;
};

const LazyComponent = React.lazy(() =>
  delayedLoading(import("./LazyComponent"))
);

const LazyContainer = () => {
  return (
    <div>
      <h1>LazyContainer</h1>

      <div>
        <Suspense fallback={<Loading />}>
          <LazyComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default LazyContainer;

import React from "react";
import useFetch from "./useFetch";

const URL = "https://jsonplaceholder.typicode.com/users";
const FetchHookContainer = () => {
  const { data, error, loading } = useFetch(URL);

  return (
    <div>
      <h2>Fetch Hook Container</h2>
      <div className="flex flex-col gap-2">
        {loading ? (
          <>Loading...</>
        ) : (
          data?.map((item) => (
            <div key={item.id} className="border rounded">
              <p className="px-3 py-2 border-b">{item.name}</p>
              <p className="px-3 py-2 border-b">{item.email}</p>
              <p className="px-3 py-2 border-b">{item.address.city}</p>
            </div>
          ))
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FetchHookContainer;

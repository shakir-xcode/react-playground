import React, { useEffect, useRef, useState } from "react";
import useThrottle from "./useThrottle";

const URL = "https://dummyjson.com/products?limit=50";

const SLICE_SIZE = 10;

const data = {
  products: [
    "trimmer",
    "hair Dryer",
    "electric comb",
    "iron",
    "shampoo",
    "soap",
    "shaving blade",
    "scrubber",
    "heater",
    "boiler",
    "cooker",
    "washing machine",
    "Fan",
    "Oven",
    "Stove",
    "Mixer Grinder",
    "Non-stick Pan",
    "trimmer",
    "hair Dryer",
    "electric comb",
    "iron",
    "shampoo",
    "soap",
    "shaving blade",
    "scrubber",
    "heater",
    "boiler",
    "cooker",
    "washing machine",
    "Fan",
    "Oven",
    "Stove",
    "Mixer Grinder",
    "Non-stick Pan",
    "trimmer",
    "hair Dryer",
    "electric comb",
    "iron",
    "shampoo",
    "soap",
    "shaving blade",
    "scrubber",
    "heater",
    "boiler",
    "cooker",
    "washing machine",
    "Fan",
    "Oven",
    "Stove",
    "Mixer Grinder",
    "Non-stick Pan",
  ],
};

const getProducts = async () => {
  // const res = await fetch(URL);
  // if (!res.ok) return [];
  // return await res.json();

  // return new Promise((resolve) => {
  //   setTimeout(resolve, 2000, data);
  // });

  return data;
};

const getDataSlice = (data, slice) => {
  //   if (slice <= 1) return data.slice(0, 12);
  return data.slice(0, SLICE_SIZE * slice);
};

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentSlice, setCurrentSlice] = useState(1);

  const handleDataFetch = async () => {
    // console.log("current slice : ", currentSlice);
    if (currentSlice !== 1 && products.length === allProducts.length) return;
    setLoading(true);
    // simulating delay
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
    let data = null;
    if (allProducts.length === 0) {
      data = await getProducts();
      setAllProducts(data.products);
    } else data = { products: [...allProducts] };
    setProducts(getDataSlice(data.products, currentSlice));
    setCurrentSlice((value) => value + 1);
    setLoading(false);
  };

  const throttledScroll = useThrottle(handleDataFetch);

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [currentSlice]);

  useEffect(() => {
    console.log("Products updated .. ", products.length);
  }, [products]);

  return (
    <div>
      <h2>Products</h2>

      <div>
        {products.map((item, index) => (
          <p key={index} className="my-3 text-lg font-semibold">
            {index + 1} . {item}
          </p>
        ))}
      </div>
      <div>
        {loading && (
          <span className="loading loading-spinner loading-lg"></span>
        )}
      </div>
      <button onClick={handleDataFetch}>load</button>
    </div>
  );
};

export default Products;

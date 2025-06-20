import React, { useEffect, useState } from "react";

const URL = "https://dummyjson.com/products?limit=50";

const fetchProducts = async () => {
  console.log("Making network request...");
  const res = await fetch(URL);
  if (!res.ok) return null;
  const data = await res.json();

  return data;
};

const fetchProductsByPage = (products, page) => {
  const pageCount = Math.floor(products.length / 10);
  return [products.slice(page * 10 - 10, page * 10), pageCount];
};

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [pageId, setPageId] = useState(1);
  const [pageProducts, setPageProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const makePageData = async (pId = 1, allProducts) => {
    if (allProducts.length === 0) {
      const res = await fetchProducts();
      setProducts(() => res.products);
    }

    const [pds, pCount] = fetchProductsByPage(products, pId);
    setPageProducts(pds);
    setPageCount(pCount);
    setPageId(pId);
  };

  useEffect(() => {
    (async function () {
      await makePageData(1, []);
    })();
  }, []);
  return (
    <div>
      <p className="text-bold text-xl mb-2">Page: {pageId}</p>
      {products &&
        pageProducts.map((product) => (
          <p key={product.id}>
            {product.id}. {product.title}
          </p>
        ))}

      <div className="flex gap-3 mt-6 items-center">
        {pageId > 1 && (
          <button
            className="text-white"
            onClick={() => {
              makePageData(pageId - 1, products);
            }}
          >
            Prev
          </button>
        )}
        <p>
          {pageCount > 1 &&
            [...Array(pageCount)].map((_, index) => (
              <span
                key={index}
                className={`${
                  pageId === index + 1
                    ? " text-gray-800 bg-slate-200"
                    : "text-black"
                } border px-3 py-2 cursor-pointer`}
                onClick={() => makePageData(index + 1, products)}
              >
                {index + 1}
              </span>
            ))}
        </p>

        {pageId < pageCount && (
          <button
            className="text-white"
            onClick={() => {
              makePageData(pageId + 1, products);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;

import React, { useEffect, useState } from "react";

const URL = "https://dummyjson.com/products?limit=50";

const ITEMS_PER_PAGE = 10;

const fetchProducts = async () => {
  const res = await fetch(URL);
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  return data;
};

const paginate = (products, page) => {
  const pageCount = Math.ceil(products.length / ITEMS_PER_PAGE);
  const start = page * ITEMS_PER_PAGE - ITEMS_PER_PAGE;
  const currentItems = products.slice(start, start + ITEMS_PER_PAGE);
  return [currentItems, pageCount];
};

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [pageId, setPageId] = useState(1);
  const [pageProducts, setPageProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const loadPage = (pageNumber, allProducts = products) => {
    const [currentItems, totalPages] = paginate(allProducts, pageNumber);
    setPageProducts(currentItems);
    setPageCount(totalPages);
    setPageId(pageNumber);
  };

  useEffect(() => {
    const init = async () => {
      try {
        const { products } = await fetchProducts();
        setProducts(products);
        loadPage(1, products);
      } catch (error) {
        console.error(error.message || "something went wrong...");
      }
    };

    init();
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
              loadPage(pageId - 1);
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
                onClick={() => loadPage(index + 1)}
              >
                {index + 1}
              </span>
            ))}
        </p>

        {pageId < pageCount && (
          <button
            className="text-white"
            onClick={() => {
              loadPage(pageId + 1);
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

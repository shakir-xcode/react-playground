import React, { useState, useEffect } from "react";
import explorer from "./data";
import Folder from "./Folder";

const traversal = (tree, setAll) => {
  console.log(tree.name);
  setAll((pre) => [...pre, <Folder subTree={tree} />]);
  if (tree.items.length === 0) return;
  tree.items.forEach((subTree) => traversal(subTree, setAll));
};

const AllFolders = () => {
  // const [allc, setAll] = useState([]);
  // useEffect(() => {
  //   traversal(explorer, setAll);
  // }, []);
  return (
    <div className=" border">
      <Folder subTree={explorer} />
    </div>
  );
};

export default AllFolders;

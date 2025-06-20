import React, { useCallback, useState } from "react";
import GridItem from "./GridItem";

const ITEM_COUNT = 9;
const config = [1, 1, 1, 1, 0, 1, 1, 1, 1];

const GridLights = () => {
  const [order, setOrder] = useState([]);
  const handleLightClick = (index) => {
    setOrder((pre) => {
      const updatedOrder = [...pre];
      if (updatedOrder.length < ITEM_COUNT && !updatedOrder.includes(index))
        updatedOrder.push(index);
      if (updatedOrder.length === 8) turnOffLights();
      return updatedOrder;
    });
  };

  const turnOffLights = () => {
    const id = setInterval(() => {
      setOrder((pre) => {
        if (pre.length === 0) {
          clearInterval(id);
          return [];
        }
        const newOrder = [...pre];
        newOrder.pop();
        return newOrder;
      });
    }, 500);
  };

  return (
    <div>
      <h2>Grid Lights</h2>

      <div className="w-fit border border-black grid grid-cols-3 items-center gap-2 p-2">
        {config.map((cell, index) =>
          cell ? (
            <GridItem
              key={index}
              active={order.includes(index)}
              handleClick={handleLightClick}
              index={index}
            />
          ) : (
            <span key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default GridLights;

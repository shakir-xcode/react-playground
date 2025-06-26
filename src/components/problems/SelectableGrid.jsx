import React, { useCallback, useEffect, useId, useState } from "react";

const ROWS = 10;
const COLS = 15;

const getSelectedBoxes = (sNum, eNum) => {
  const startNum = Math.min(sNum, eNum);
  const endNum = Math.max(sNum, eNum);

  const startRow = Math.floor((startNum - 1) / COLS) + 1;
  const startCol = Math.floor((startNum - 1) % COLS) + 1;

  const endRow = Math.floor((endNum - 1) / COLS) + 1;
  const endCol = Math.floor((endNum - 1) % COLS) + 1;

  const verticalRange = endRow - startRow;
  const horizontalRange = endCol - startCol;

  const result = [];
  for (let i = 0; i <= verticalRange; i++) {
    let sn = startNum + COLS * i;
    if (horizontalRange >= 0)
      for (let j = 0; j <= horizontalRange; j++) {
        result.push(sn + j);
      }
    else
      for (let j = 0; j >= horizontalRange; j--) {
        result.push(sn + j);
      }
  }
  return result;
};

const GridItem = React.memo(
  ({ i, handleMouseDown, handleMouseEnter, isIncluded }) => {
    return (
      <div
        key={i}
        className={`text-md font-semibold  p-1 flex justify-center items-center border select-none
                ${isIncluded ? "bg-blue-200" : "white"}
                `}
        onMouseEnter={() => handleMouseEnter(i + 1)}
        onMouseDown={() => handleMouseDown(i + 1)}
      >
        {i + 1}
      </div>
    );
  }
);

const SelectableGrid = () => {
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseUp = useCallback(() => {
    setIsMouseDown(false);
  }, []);

  const handleMouseDown = useCallback((num) => {
    setIsMouseDown(true);
    setSelectedBoxes([num]);
  }, []);

  const handleMouseEnter = useCallback(
    (num) => {
      if (isMouseDown)
        setSelectedBoxes((value) => [
          ...getSelectedBoxes(selectedBoxes[0], num),
        ]);
    },
    [isMouseDown]
  );

  return (
    <div>
      <h2>SelectableGrid</h2>
      <p>{useId()}</p>
      <p>{useId()}</p>
      <p>{useId()}</p>
      <div
        className="grid grid-cols-[repeat(15,35px)] gap-[2px]"
        onMouseUp={handleMouseUp}
      >
        {[...Array(ROWS * COLS).keys()].map((_, i) => (
          <GridItem
            key={i}
            i={i}
            handleMouseDown={handleMouseDown}
            handleMouseEnter={handleMouseEnter}
            isIncluded={selectedBoxes.includes(i + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectableGrid;

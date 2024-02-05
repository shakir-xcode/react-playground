import getRandomShape, { defaultShape } from "./shapes/shapes";

let SHAPE;
const ACTIVE_BOX = true;
const IN_ACTIVE_BOX = false;
let preShape = [];
const INCREMENT_SIZE = 10;
const boxStateStoreArray = [];
let gridActiveState = [];

export const boxStateStore = (index, fn) => {
  boxStateStoreArray[index] = fn;
};

// ---------------------------------------------------------------
const initializeBoxes = () => {
  let arr = [];
  for (let i = 0; i < 90; i++) {
    arr.push(IN_ACTIVE_BOX);
  }
  gridActiveState = [...arr];
  return arr;
};
const boxIndices = initializeBoxes();

// ----------------------------------------------------
const initializeShape = () => {
  preShape = [];
  SHAPE = getRandomShape();
  return SHAPE;
};

// ---------------------------------------------------------------------

const resetPreviousBoxState = () => {
  preShape.forEach((idx) => {
    boxStateStoreArray[idx](IN_ACTIVE_BOX);
  });
};

// ------------------------------------------------------

const isCheckDownGood = (shape) => {
  for (let i = 0; i < shape.length; i++) {
    if (gridActiveState[shape[i] + 10] === ACTIVE_BOX) {
      console.log("not goood check");
      return false;
    }
  }
  console.log("goood check");
  return true;
};

//  ------------ Increment shape ---------------------
const incrementShape = () => {
  preShape = [...SHAPE];

  if (!isCheckDownGood(SHAPE) || Math.max(...SHAPE) > boxIndices.length - 10) {
    // capture gridSTate
    SHAPE.forEach((idx) => {
      gridActiveState[idx] = ACTIVE_BOX;
    });
    console.log(SHAPE);
    return false;
  }
  SHAPE.forEach((value, index, arr) => {
    arr[index] = value + INCREMENT_SIZE;
  });

  // resetPreviousBoxState();
  return true;
};

// ------------------------------------------------------------------------
export const shiftDown = () => {
  // const updatedIndices = [...boxIndices];
  console.log("SHAPE: ", SHAPE);
  SHAPE.forEach((idx) => {
    boxStateStoreArray[idx](ACTIVE_BOX);
  });
  // return updatedIndices;
};

// ------------------------------------------------------------------------

export const drive = (updateState) => {
  console.log("------------------- INTERVAL----------------");
  // SHAPE = getRandomShape();
  const intervalID = setInterval(() => {
    resetPreviousBoxState();
    shiftDown();
    // incrementShape();
    if (!incrementShape()) {
      clearInterval(intervalID);
      // resetShapes();
      return;
    }
    // shiftDown();

    // drive();
  }, 500);
};

// ------------------------------------------------------------------------

// const resetShapes = () => {
//   initializeShape();
//   preShape = [];
// };

export const start = () => {
  initializeShape();
  drive();
  const intervalID = setInterval(() => {
    console.log("RESETED SHAPE : ", initializeShape());
    drive();
  }, 7000);
};

export default boxIndices;

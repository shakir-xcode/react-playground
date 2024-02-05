const SHAPE_1 = [3, 4, 5, 6, 13];
const SHAPE_2 = [4, 5, 14, 15];
const SHAPE_3 = [3, 4, 5];
const SHAPE_4 = [4, 14, 24];
const SHAPE_5 = [4, 5, 14];
export const defaultShape = SHAPE_1;

const shapes = [SHAPE_1, SHAPE_2, SHAPE_3, SHAPE_4, SHAPE_5];

const getRandomShape = () => {
  let idx = Math.floor((Math.random() * 10) % shapes.length);
  return shapes[idx];
};

export default getRandomShape;

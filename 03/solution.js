const ORIGIN = 1;
const INPUT = 277678;

const LAYER_SIZE_FACTOR = 8;
const CORNER_TO_CORNER_FACTOR = LAYER_SIZE_FACTOR / 4;

const sides = {
  0: {
    xSignStart: 1,
    ySignStart: -1,
    xStep: -1,
    yStep: 0
  },
  1: {
    xSignStart: -1,
    ySignStart: -1,
    xStep: 0,
    yStep: 1
  },
  2: {
    xSignStart: -1,
    ySignStart: 1,
    xStep: 1,
    yStep: 0
  },
  3: {
    xSignStart: 1,
    ySignStart: 1,
    xStep: 0,
    yStep: -1
  }
}

const getLayer = address => {
  let layer = 0;
  let maxAddress = ORIGIN;
  while (address > maxAddress) {
    layer++;
    maxAddress += layer * LAYER_SIZE_FACTOR;
  }
  return {layer, maxAddress};
};

const getCoordinates = address => {
  if (address === ORIGIN) {
    return {x: 0, y: 0};
  }
  const {layer, maxAddress} = getLayer(address);
  const offset = maxAddress - address;
  const side = Math.trunc(offset / (layer * CORNER_TO_CORNER_FACTOR));
  const sideOffset = offset % (layer * CORNER_TO_CORNER_FACTOR);
  return {
    x: layer * sides[side].xSignStart + sideOffset * sides[side].xStep,
    y: layer * sides[side].ySignStart + sideOffset * sides[side].yStep
  };
  return coordinates;
};

const getManhattanDistance = (a, b) => Math.abs(b.x - a.x) + Math.abs(b.y - a.y);

console.log('Part 1: ' + getManhattanDistance(getCoordinates(INPUT), getCoordinates(ORIGIN)));

const values = {
  '0,0': 1
};
let val = 1;
let address = 1;
while (val < INPUT) {
  address++;
  val = 0;
  const {x, y} = getCoordinates(address);

  val += values[`${x-1},${y+1}`] || 0;
  val += values[`${x},${y+1}`] || 0;
  val += values[`${x+1},${y+1}`] || 0;

  val += values[`${x-1},${y}`] || 0;
  val += values[`${x+1},${y}`] || 0;

  val += values[`${x-1},${y-1}`] || 0;
  val += values[`${x},${y-1}`] || 0;
  val += values[`${x+1},${y-1}`] || 0;

  values[`${x},${y}`] = val;
}

console.log('Part 2: ' + val);

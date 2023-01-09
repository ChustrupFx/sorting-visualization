const arr = [
  1500, 50, 9, 500, 900
]
const arrayLen = arr.length


for (let minIndex = 0; minIndex < arrayLen; minIndex++) {
  let lowestValueIndex = minIndex;

  for (let index = minIndex; index < arrayLen; index++) {

    const currentIndexValue = arr[index];
    const lowestValue = arr[lowestValueIndex];

    if (currentIndexValue < lowestValue) lowestValueIndex = index;

  }

  const lowestValue = arr[lowestValueIndex];
  const minIndexValue = arr[minIndex];

  arr[minIndex] = lowestValue;
  arr[lowestValueIndex] = minIndexValue;
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0)
}

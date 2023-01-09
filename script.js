let arr = []
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


let width = 800;
let height = 600;

function setup() {
  createCanvas(width, height);
  background(0)
  arr = generateArray(100)

  renderBars();

  function renderBars() {
    arr.forEach((num, index) => {
      const barHeight = map(num, 0, 1, 0, height);
      const barWidth = width / arr.length;
      const x = index * barWidth;
      const y = height - barHeight;

      fill(255)
      rect(x, y, barWidth, barHeight);

    })
  }

  function generateArray(length) {

    const arr = [];

    for (let i = 0; i < length; i++) {
      arr.push(random());
    }

    return arr;

  }
}

function draw() {



}

let arr = []





let width = 800;
let height = 600;

function setup() {
  createCanvas(width, height);
  background(0)
  arr = generateArray(100)



  function generateArray(length) {

    const arr = [];

    for (let i = 0; i < length; i++) {
      arr.push(random());
    }

    return arr;

  }
}

let minIndex = 0;
let currentIndex = minIndex
let lowestValueIndex = minIndex;

function draw() {
  background(0)
  console.log('Min index:', minIndex);
  console.log('Current Index:', currentIndex);
  if (minIndex < arr.length) {
    let currentIndexValue = arr[currentIndex];
    let lowestValue = arr[lowestValueIndex]

    if (currentIndexValue < lowestValue) lowestValueIndex = currentIndex;
    lowestValue = arr[lowestValueIndex]
    let minIndexValue = arr[minIndex]
    if (currentIndex < arr.length) {
      currentIndex++
    } else {
      arr[minIndex] = lowestValue;
      arr[lowestValueIndex] = minIndexValue;

      console.log('Lowest:', lowestValue);
      console.log('MinIndexValue:', arr[minIndex]);
      minIndex++
      currentIndex = minIndex
      lowestValueIndex = minIndex;
    }

  }
  renderBars();


}

function renderBars() {
  arr.forEach((num, index) => {
    const barHeight = map(num, 0, 1, 0, height);
    const barWidth = width / arr.length;
    const x = index * barWidth;
    const y = height - barHeight;
    fill(255)
    minIndex === index && fill(0, 255, 0)
    index === currentIndex && fill(255, 0, 0)
    rect(x, y, barWidth, barHeight);

  })
}

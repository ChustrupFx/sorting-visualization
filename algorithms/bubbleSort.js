const arr = [
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1
]
let swapped = false;

do {
    swapped = false;
    for (let index = 0; index < arr.length - 1; index++) {

        const currentIndexValue = getValueByIndex(index);
        const nextIndexValue = getValueByIndex(index + 1);
        if (currentIndexValue > nextIndexValue) {
            swapped = true;
            swap(index, index + 1);
        }
    }
} while (swapped)

console.log(arr);

function swap(index1, index2) {
    const index1Value = getValueByIndex(index1);
    const index2Value = getValueByIndex(index2);
    arr[index1] = index2Value;
    arr[index2] = index1Value;
}

function getValueByIndex(index) {
    return arr[index];
}


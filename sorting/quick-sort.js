function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) { // when left === right, subarray is one element => complete
        let pivotIndex = pivot(arr, left, right);
        // left side
        quickSort(arr, left, pivotIndex - 1)
        // right side
        quickSort(arr, pivotIndex + 1, right)
    }

    return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex += 1;

            // swap elements
            swap(arr, swapIndex, i)
        }
    }

    swap(arr, start, swapIndex)

    return swapIndex;
}

let arrNum = [4, 8, 2, 1, 5, 7, 6, 3];
console.log(pivot(arrNum));
console.log(arrNum)

console.log(quickSort([4, 6, 7, 1, 2, 5, 3]));
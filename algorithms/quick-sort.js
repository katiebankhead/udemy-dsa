function quickSort(arr) {
    let pivotIndex = pivot(arr);
}

function pivot(arr, start=0, end=arr.length-1) {
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
            // swap(arr, swapIndex, i)
            let placeholder = arr[swapIndex];
            arr[swapIndex] = arr[i];
            arr[i] = arr[swapIndex];
        }
    }

    swap(arr, start, swapIndex)

    return swapIndex;
}

let arrNum = [4,8,2,1,5,7,6,3];
console.log(pivot(arrNum));
console.log(arrNum)
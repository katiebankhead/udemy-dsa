function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function bubbleSort(arr) {
    // My first attempt
    // for (let i = arr.length - 1; i >= 0 ; i--) {
    //     console.log(arr)
    //     for (let j = 0; j < i - 1; j++) {
    //         if (arr[j] > arr[j+1]) {
    //             swap(arr, j, j+1);
    //         }
    //     }
    // }

    // Naive solution
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length; j++) {
    //         console.log(arr, arr[j], arr[j+1])

    //         if(arr[j] > arr[j+1]){
    //             swap(arr, j, j+1);
    //         }
    //     }
    // }

    // optimized with no swaps
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])

            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
                noSwaps = false;
            }   
        }
        if(noSwaps) break;
    }

    return arr;
}

let arrayNum = [6,2,5,1,3,4]
console.log('final', bubbleSort(arrayNum))
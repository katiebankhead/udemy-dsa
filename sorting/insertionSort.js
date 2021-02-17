// studied both Colt's solution and Kahn Academy's. I prefer the latter so far (https://www.youtube.com/watch?v=lEA31vHiry4)

// Udemy version
// function insertionSort(arr) {
//     for(let i = 1; i < arr.length; i++) {
//         let currentVal = arr[i];
//         for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j + 1] = arr[j];
//         }
//         arr[j + 1] = currentVal;  // out of scope when using 'let' declaration
//         console.log(arr)
//     }
//     return arr;
// }

// adapted from Kahn academy
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j = i-1;
        while (j >= 0) {
            if (currentValue < arr[j]) {
                arr[j+1] = arr[j];
                arr[j] = currentValue;
                j = j - 1;
            }
            else break;
        }
    }

    return arr;
}

const arrNum = [18,8,46,23,37];
console.log(insertionSort(arrNum))
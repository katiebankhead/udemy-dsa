function merge(arr1, arr2) {
    let arrFinal = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr2[j] >= arr1[i]){
            arrFinal.push(arr1[i]);
            i++;
        }
        else {
            arrFinal.push(arr2[j])
            j++;
        }
    }

    // add the rest of the non-exhausted array
    while(i < arr1.length) {
        arrFinal.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        arrFinal.push(arr2[j]);
        j++;
    }

    return arrFinal;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

// console.log(merge([1,10,50], [2,14,99,100]))

console.log(mergeSort([10,24,76,73,72,1,9]));
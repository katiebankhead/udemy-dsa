function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

let aNum = [34, 22, 10, 19, 17]
console.log(selectionSort(aNum))
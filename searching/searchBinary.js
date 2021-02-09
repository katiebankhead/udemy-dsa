// this was working fine in VScode but not in Udemy and so I changed things
// but now it's not working at all
// but also I'm mentally done
function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let guess = Math.floor((left + right) / 2);

    while (left <= right && arr[guess] !== val) {
        if (arr[guess] === val) {
            return guess;
        }
        else if (arr[guess] < val) {
            left = guess + 1;
        }
        else {
            right = guess - 1;
        }
        guess = Math.floor((left + right) / 2);
    }

    return -1;
}

const array = [ 1,2,3,4,5,6,7,8,9,10,11,12];

const num = 9;

console.log(binarySearch(array, num))
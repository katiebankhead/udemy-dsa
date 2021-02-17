/** HELPER METHODS */

// returns digit value in i place (starting from 1s place and moving left)
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// returns # of digits in a word
function digitCount(num){
    // could also be implemented by converting to string -> finding length
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// returns largest number of digits of an array of nums
function mostDigits(arrNums) {
    let maxDigits = 0;

    // my way
    // for(let num of arrNums) {
    //     if (digitCount(num) > maxDigits) {
    //         maxDigits = digitCount(num);
    //     }
    // }

    // colt's way
    for (let i = 0; i < arrNums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arrNums[i]))        
    }

    return maxDigits;
}

function radixSort(arrNums) {
    let maxDigits = mostDigits(arrNums);

    for (let i = 0; i < maxDigits; i++) {
        // create buckets for each digit 0-9
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let j = 0; j < arrNums.length; j++) {
            // get digit value for each number
            let digit = getDigit(arrNums[j], i);
            // push number to corresponding bucket array
            digitBuckets[digit].push(arrNums[j]);
        }
        // concatenate all arrays (don't forget spread operator) and start again
        arrNums = [].concat(...digitBuckets)
    }
    return arrNums;
}

// console.log(getDigit(7324, 0));
// console.log(digitCount(21718));
// console.log(mostDigits([12,7,2352,156,36]));

console.log(radixSort([235,1,63,887,2352,9]));
// console.log(radixSort([23,345,5467,12,2345,9852]));
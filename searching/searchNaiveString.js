// function searchNaiveString(longString, word) {
//     "use strict"
//     let wordCount = 0;

//     for(let char in longString) {
//         // if char === first letter in word, see if the other chars also match
//         for(let wordChar in word) {
//             if (char === wordChar) {
//                 char += 1;
//             }
//             //else, move on to the next long string char
//             else break;
//         }
//         wordCount += 1;
//     }

//     return wordCount;
// }

//Colt's solution because mine isn't working
function searchNaiveString(long, short) {
    let count = 0;

    for(let i = 0; i < long.length; i++) {
        for(let j = 0; j < short.length; j++) {
            if (short[j] !== long[i+j]) {
                break;
            }
            if(j === short.length - 1) {
                count++;
            }
        }
    }

    return count;
}

//expect count == 2
const stuff = "asfhisdflkjhibye";
const pattern = "hi";

console.log(searchNaiveString(stuff, pattern)) 
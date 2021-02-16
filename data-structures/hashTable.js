class HashTable {
    constructor(size=4) {
        this.keyMap = new Array(size);
    };

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);

        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);

        if(this.keyMap[index]){
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        let arrKeys = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!arrKeys.includes(this.keyMap[i][j][0])){
                        arrKeys.push(this.keyMap[i][j][0]);
                    }
                }
            }

        }
        return arrKeys;
    }

    values() {
        let arrVals = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!arrVals.includes(this.keyMap[i][j][1])){
                        arrVals.push(this.keyMap[i][j][1]);
                    }
                }
            }
            

        }
        return arrVals;

    }
}

let ht = new HashTable();
ht.set("hello", "world")
ht.set("february", "15")
ht.set("LEON", "Seventeen")
ht.set("George Ezra", "Da Vinci Riot Police")
ht.set("Adam Melchor", "I CHOOSE YOU")
ht.set("hi", "world")
console.log(ht)
console.log(ht.get("George Ezra"));
console.log(ht.get("Adam Melchor"));
console.log(ht.get("LEON"));
console.log(ht.get("february"));
console.log(ht.keys());
console.log(ht.values());


//////////////////////
/// HASH FUNCTIONS ///
//////////////////////
// simple, not great hash function
//  - not constant time
//  - could be more random
// function hash(key, arrayLen) {
//     let total = 0;
//     for (let char of key) {
//         // map "a" to 1, "b" to c, "c" to 3, etc.
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }

// slightly better solution
function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

// console.log(hash("blue", 13));
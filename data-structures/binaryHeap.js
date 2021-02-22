class MaxBinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27,12]; // we're using an array to represent the tree structure here
    }

    insert(val) {
        this.values.push(val);
        return this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1)/2);
            const parentElement = this.values[parentIndex];

            if (element <= parentElement) break;

            // swap the two
            this.values[parentIndex] = element;
            this.values[index] = parentElement;

            // update indices values
            index = parentIndex;
        }

        return this;
    }
}

let heap = new MaxBinaryHeap();
// console.log(heap.insert(15));
// console.log(heap.insert(7));
// console.log(heap.insert(11));
// console.log(heap.insert(26));
console.log(heap.insert(100));
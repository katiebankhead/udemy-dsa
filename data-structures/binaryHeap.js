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

    extractMax() {
        // remove old root and replace with last value
        let max = this.values[0];

        if(this.values.length > 0) {
            this.values[0] = this.values.pop()
            this.sinkDown();
        }
    
        return max;
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIndex = (2 * index) + 1;
            let rightChildIndex = (2 * index) + 2;
            let leftChild;
            let rightChild;
            let swapIndex = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swapIndex = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if((swapIndex === null && rightChild > element) ||
                   (swapIndex !== null && rightChild > leftChild)
                ) {
                    swapIndex = rightChildIndex;
                }
            }
            if(swapIndex === null) break;

            this.values[index] = this.values[swapIndex];
            this.values[swapIndex] = element;

            index = swapIndex;
        }
    }
}

let heap = new MaxBinaryHeap();
// console.log(heap.insert(15));
// console.log(heap.insert(7));
// console.log(heap.insert(11));
// console.log(heap.insert(26));
console.log(heap.insert(100));
console.log(heap.extractMax())
console.log(heap);
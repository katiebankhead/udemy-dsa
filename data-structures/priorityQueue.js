class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        // create node and push to values array
        let newNode = new Node(val, priority);
        this.values.push(newNode);

        // call bubbleUp
        return this.bubbleUp();
    }

    bubbleUp() {
        // minHeap -> smallest value should be at the top
        let index = this.values.length - 1;
        const element = this.values[index];

        // look at parent node
        // if parent priority is larger, swap values and repeat
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parentElement = this.values[parentIndex];

            if (element.priority >= parentElement.priority) break;

            // swap values
            this.values[index] = parentElement;
            this.values[parentIndex] = element;

            index = parentIndex;
        }

        return this;
    }

    dequeue() {
        // remove the root and replace with last element
        let min = this.values[0];

        if (this.values.length > 0) {
            // move most recently added element to root position
            let element = this.values.pop();
            this.values[0] = element;
            // call sink down
            this.sinkDown();
        }

        return min;
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[index];

        // compare new root (was the last element) to child nodes
        while (true) {
            let leftChildIndex = (2 * index) + 1;
            let rightChildIndex = (2 * index) + 2;
            let leftChild;
            let rightChild;
            let swapIndex = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority < element.priority) {
                    swapIndex = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swapIndex === null && rightChild.priority < element.priority) ||
                    (swapIndex !== null && rightChild.priority < leftChild.priority))
                {
                    swapIndex = rightChildIndex;
                }
            }
            if (swapIndex === null) break;

            this.values[index] = this.values[swapIndex];
            this.values[swapIndex] = element;

            index = swapIndex;
        }

    }
}

let pQueue = new PriorityQueue();
console.log(pQueue.enqueue("abbie", 2));
console.log(pQueue.enqueue("lizzie", 4));
console.log(pQueue.enqueue("katie", 1));
console.log(pQueue.enqueue("avery", 3));
console.log(pQueue.dequeue());
console.log(pQueue);
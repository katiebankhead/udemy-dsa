class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }   
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //add value to the end
    enqueue(value) {
        let newNode = new Node(value);

        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size += 1;
        return this.size;
    }

    //remove value from beginning
    dequeue() {
        if(!this.first) return null;

        let removedNode = this.first;

        // colt's addition
        if(this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        removedNode.next = null; // again, do we not need to sever this tie?

        this.size -= 1;

        // I like this edge case handling better than colt's above
        if(this.size === 0){
            this.first = null;
            this.last = null;
        }
        return removedNode.value;
    }
}

let q = new Queue();
q.enqueue("samantha")
q.enqueue("olivia")
q.enqueue("alice");
console.log(q)
console.log(q.dequeue())
console.log(q)
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q)
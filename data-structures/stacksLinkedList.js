// could use a singly or doubly linked list, we'll use SLL here
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // methods are called push/pop, but act like unshift/shift to maintain constant time (O(1))
    push(val) {
        let newNode = new Node(val);

        newNode.next = this.first;
        this.first = newNode;

        if(this.size === 0) {
            this.last = newNode;
        }

        this.size += 1;
        return this.size;
    }

    pop() {
        if(!this.first) return null;

        let removedNode = this.first;

        if(this.first === this.last) {
            this.last = null;
        }

        this.first = removedNode.next;
        removedNode.next = null; // do we need this line in a stack?

        this.size -= 1;
        return removedNode.value;
    }
}

let myStack = new Stack();
console.log(myStack.push("monday"));
console.log(myStack.push("tuesday"));
console.log(myStack.push("wednesday"));
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);
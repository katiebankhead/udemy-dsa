class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        // is the list empty?
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

        }
        else {
            // if list is not empty
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length += 1;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let removedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            // locate tail and pen element
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }

        this.length -= 1;
        return removedNode;
    }
}

list = new DoublyLinkedList();

list.push("katie");
list.push("abbie");
list.push("avery");
console.log(list)
console.log(list.pop())
console.log(list)
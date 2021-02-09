class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        // assign a new node to the tail of the list, and have prior node point to it
        let newNode = new Node(val);

        // if no head, set head and tail to newly created node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        // else, set next property on tail to the new node
        // and set tail property on list to be new node
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length += 1;
        return this;
    }

    pop() {
        // if no nodes, return undefined
        if (this.length === 0) {
            return undefined;
        }

        var current = this.head;
        var newTail = current;

        // loop through entire list until you reach the tail
        // (but keep track of the penultimate node)        
        while(current.next) {
            newTail = current;
            current = current.next;
        }

        // set list.tail to be penultimate node
        // (set the next prop of penultimate node = null)
        this.tail = newTail;
        this.tail.next = null;

        // decrement length--
        this.length -= 1;

        // account for empty lists
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        //return the value of the removed node
        return current;
    }

    shift() {
        // if there are no nodes, return undefined
        if (this.length === 0) {
            return undefined;
        }

        // save oldHead node to return
        let oldHead = this.head;

        // set this.head to next node
        this.head = this.head.next;

        this.length -= 1;

        if (this.length === 0) {
            this.tail = null;
        }

        return oldHead;
    }

    unshift(val) {
        let oldHead = this.head;
        let newHead = new Node(val);

        if (this.length === 0) {
            this.head = newHead;
            this.tail = this.head;
        }
        else {
            this.head = newHead;
            this.head.next = oldHead;
        }
        
        this.length += 1;
        return this;
        
    }

    get(index) {
        let count = 0;
        let current = this.head;

        if(index < 0 || index >= this.length) return null;

        while(count < index) {
            current = current.next;
            count += 1;
        }

        return current;
    }

    set(index, value) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = value;
            return true;
        }
        return false
    }

    insert(index, value) {
        //edge cases
        if (index < 0 || index > this.length) return false;
        else if (index === 0) return !!this.unshift(value);
        else if (index === this.length) return !!this.push(value);

        // find previous node
        let pen = this.get(index - 1);

        // create new node object, set val, set next
        let newNode = new Node();
        newNode.val = value;
        newNode.next = pen.next

        // redirect previous node to newNode
        pen.next = newNode;

        this.length += 1;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        else if (index === 0) return this.shift();
        else if (index === this.length - 1) return this.pop();

        let pen = this.get(index - 1);
        let removedNode = pen.next

        pen.next = removedNode.next;

        this.length -= 1;
        return removedNode;
    }

    reverse() {
        // this is the hard one
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let oldNext = this.tail.next;
        this.tail.next = null;

        let prev = this.tail;
        let current = oldNext;

        while(current) {
            oldNext = current.next;
            current.next = prev;

            prev = current;
            current = oldNext;
        }

        return this;

        // colt's prettier solution (but mine also worked!)
        // let node = this.head;
        // this.head = this.tail;
        // this.tail = node;
        // let next;
        // let prev = null;
        // for(let i = 0; i < this.length; i++) {
        //     next = node.next;
        //     node.next = prev;
        //     prev = node;
        //     node = next;
        // }
        // return this;
    }

    print() {
        let arr = [];
        let current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}

let list = new SinglyLinkedList
// list.push("hello")
// list.push("goodbye")
// list.push("YOU GOT IT")
// console.log(list)

// console.log(list.pop());
// console.log(list)

// console.log(list.shift());
// console.log(list)
// console.log(list.shift());
// console.log(list.shift());
// console.log(list);

// console.log(list.unshift("new head"))

// console.log(list.get(1))

// console.log(list.set(2, 'idk why u say goodbye i say hello'))
// console.log(list)

// console.log(list.insert(2, "glee cast"))
// console.log(list)

// console.log(list.remove(1));
// console.log(list);

list.push("katie")
list.push("abbie")
list.push("avery")
list.push("lizzie")
list.print()

console.log(list.reverse())
list.print()
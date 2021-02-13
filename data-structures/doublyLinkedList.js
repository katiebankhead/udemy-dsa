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

    shift() {
        if(!this.head) return undefined;

        let oldHead = this.head;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        
        this.length -= 1;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);

        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length += 1;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;

        const middle = Math.floor(this.length/2);
        let current;
        let count;
        
        if(index <= middle){
            //start from beginning
            current = this.head;
            count = 0;
            while(count < index){
                current = current.next;
                count++;
            }
        }
        else {
            //start from end
            current = this.tail;
            count = this.length - 1;
            while(count > index) {
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    set(index, value) {
        let oldValue = this.get(index);

        if(oldValue !== null){
            oldValue.val = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if(index < 0 || index > this.length) return false;

        if(index === 0){
            return !!this.unshift(value);
        }

        if(index === this.length){
            return !!this.push(value);
        }

        const newNode = new Node(value);
        const prevNode = this.get(index - 1);
        const nextNode = prevNode.next;

        newNode.next = nextNode;
        nextNode.prev = newNode;

        newNode.prev = prevNode;
        prevNode.next = newNode;

        this.length += 1;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;

        if(index === 0) return this.shift();

        if(index === this.length - 1) return this.pop();

        const removedNode = this.get(index);
        const beforeNode = removedNode.prev;
        const afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;

        removedNode.next = null;
        removedNode.prev = null;

        this.length -= 1;
        return removedNode;
    }
}

list = new DoublyLinkedList();

list.push("katie");
list.push("abbie");
list.push("avery");
list.push("lizzie");
console.log(list)
console.log(list.insert(0, "hello"));
console.log(list.remove(1))
console.log(list)
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);

        if(!this.root) {
            this.root = newNode;
            return this;
        }

        let node = this.root;

        while(node) {
            if(newNode.value === node.value) {
                return undefined;
            }
            if(newNode.value > node.value) {
                if(node.right) {
                    node = node.right;
                }
                else {
                    node.right = newNode;
                    node = false;
                }
            }
            else {
                if(node.left) {
                    node = node.left;
                }
                else {
                    node.left = newNode;
                    node = false;
                }
            }
        }
        return this;
    }

    find(val) {
        if(!this.root) return false;
        
        let current = this.root;

        while(true){
            if(val === current.value) return current;
            if(val > current.value) {
                if(current.right){
                    current = current.right;
                }
                else return false;
            }
            else {
                if(current.left){
                    current = current.left;
                }
                else return false;
            }
        }
    }
}

let tree = new BinarySearchTree();
tree.insert(15);
tree.insert(19);
tree.insert(10);
tree.insert(6);
tree.insert(37);
tree.insert(37);

console.log(tree);
console.log(tree.root);

console.log(tree.find(10));
console.log(tree.find(37));
console.log(tree.find(6));
console.log(tree.find(15));
console.log(tree.find(23493));
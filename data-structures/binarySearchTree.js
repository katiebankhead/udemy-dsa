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

    BFS() {
        let queue = [];
        let visited = [];
        let visitedNode = this.root;

        queue.push(tree.root);

        while (queue.length > 0) {
            visitedNode = queue.shift();
            visited.push(visitedNode.value);

            if (visitedNode.left) queue.push(visitedNode.left);
            if (visitedNode.right) queue.push(visitedNode.right);
        }

        return visited;
    }

    DFSPreOrder() {
        function traverse(node) {
            visited.push(node.value);

            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        let visited = [];
        let current = this.root;

        traverse(current);

        return visited;
    }

    DFSPostOrder() {
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        }

        let visited = [];
        traverse(this.root); // could store in a variable
        return visited;
    }

    DFSInOrder() {
        function traverse(node) {
            if(node.left) traverse(node.left);
            visited.push(node.value);
            if(node.right) traverse(node.right);
        }

        let visited = [];
        traverse(this.root);
        return visited;
    }
}

let tree = new BinarySearchTree();
tree.insert(15);
tree.insert(10);
tree.insert(20);
tree.insert(8);
tree.insert(12);
tree.insert(17);
tree.insert(28);

// console.log(tree);
// console.log(tree.find(10));
// console.log(tree.find(8));
// console.log(tree.find(12));
// console.log(tree.find(15));
// console.log(tree.find(42));

//               15
//           10       20
//         8   12   17  28

console.log(tree.BFS()) // [15,10,20,8,12,17,28]
console.log(tree.DFSPreOrder()); // [15,10,8,12,20,17,28]
console.log(tree.DFSPostOrder()); // [8,12,10,17,28,20,15]
console.log(tree.DFSInOrder()) // [8,10,12,15,17,20,28]
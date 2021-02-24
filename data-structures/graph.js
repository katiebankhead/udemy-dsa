class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        // this is an undirected graph
        // for a directed graph, the arg order would matter, and we'd only add the edge to one array
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        // my shot
        let edgeIndex = this.adjacencyList[vertex1].indexOf(vertex2);

        if (edgeIndex > -1) {
            this.adjacencyList[vertex1].splice(edgeIndex, 1);
        }

        edgeIndex = this.adjacencyList[vertex2].indexOf(vertex1);

        if (edgeIndex > -1) {
            this.adjacencyList[vertex2].splice(edgeIndex, 1);
        }

        // colt's (less verbose) solution
        // doesn't include error handling though
        // this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v!== vertex2);
        // this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v!== vertex1);
    }

    removeVertex(vertex) {
        // remove edges between vertex and connections
        this.adjacencyList[vertex].forEach(v2 => {
            this.removeEdge(vertex, v2);
        });

        // delete vertex key in adjacency list
        delete this.adjacencyList[vertex];
    }
}

let graph = new Graph();
graph.addVertex("Paris");
graph.addVertex("London");
graph.addVertex("Rome");
graph.addVertex("Paris");
graph.addVertex("Berlin");
console.log(graph);
graph.addEdge("Paris", "Rome");
graph.addEdge("London", "Rome");
graph.addEdge("London", "Berlin");
console.log(graph);
graph.removeEdge("Rome", "Paris");
console.log(graph);
graph.removeVertex("Rome");
console.log(graph);
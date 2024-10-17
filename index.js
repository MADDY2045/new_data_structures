/**
 * Graphs
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * We are building an undirected graph
   */
  addVertex(vertex) {
    if (!this.adjacencyList.hasOwnProperty(vertex)) {
      this.adjacencyList[vertex] = [];
    }
    return this;
  }

  /**
   * Adding an edge
   * The function should accept two
   * vertices vertex1 and vertex2
   * The function should find in the
   * adjancency list, the key of vertex1
   * and push vertex2 to the array
   * The function should find in the
   * adjancency list, the key of vertex2
   * and push vertex1 to the array
   */
  addEdge(v1, v2) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1].push(v2);
    }
    if (this.adjacencyList[v2]) {
      this.adjacencyList[v2].push(v1);
    }
  }

  /**
   * Removing an edge
   * This function should accept two vertices,
   * v1 and v2
   * The function should reassign the key of v1
   * to be an array that does not contain v2
   * The function should reassign the key of v2
   * to be an array that does not contain v1
   */
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1] = this.adjacencyList[v1]?.filter(
        (vertex) => vertex !== v2
      );
    }
    if (this.adjacencyList[v2]) {
      this.adjacencyList[v2] = this.adjacencyList[v2]?.filter(
        (vertex) => vertex !== v1
      );
    }
  }

  /**
   * Removing a vertex
   * The function should accespt a vertex to remove
   * The function should loop as long as there are any
   * other vertices in the adjaceny list for that vertex
   * Inside of the loop, call our removeEdge function with
   * the vertex we are removing and any values in the
   * adjacency list for that vertex
   * delete the key
   */
  removeVertex(vertex) {
    //store the current vertex
    // let tempVertex = vertex;
    // let adjacencyListKeys = Object.keys(this.adjacencyList);
    // adjacencyListKeys.forEach((eachItem) => {
    //   this.removeEdge(eachItem, tempVertex);
    // });
    //Alternate way
    while (this.adjacencyList[vertex].length) {
      console.log('entered::::', this.adjacencyList[vertex], vertex);
      const adjacentVertex = this.adjacencyList[vertex].pop();
      console.log('adjacentVertex::::', adjacentVertex);
      this.removeEdge(vertex, adjacentVertex);
    }

    if (this.adjacencyList.hasOwnProperty(vertex)) {
      delete this.adjacencyList[vertex];
    }
  }
}

console.log('**********ADD VERTEX************');
let newGraph = new Graph();
newGraph.addVertex('Tokyo');
newGraph.addVertex('Dallas');
newGraph.addVertex('Aspen');
newGraph.addVertex('Chicago');
console.log(newGraph);
console.log('**********ADD EDGE ************');
newGraph.addEdge('Tokyo', 'Dallas');
newGraph.addEdge('Dallas', 'Aspen');
newGraph.addEdge('Chicago', 'Aspen');
console.log(newGraph);
console.log('**********ADD EDGE ************');
//newGraph.removeEdge('Tokyo', 'Dallas');
//newGraph.removeEdge('Dallas', 'Aspen');
console.log(newGraph);
console.log('**********REMOVE VERTEX ************');
newGraph.removeVertex('Dallas');
console.log(newGraph);

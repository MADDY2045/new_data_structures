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

  /**
   * DFS - Reccursive way
   * The function should accept a starting node
   * Create a list to store the end result, to be
   * returned at the very end
   * Create an object to store visited verices
   * Create a helper function which accepts a vertex
   *  The helper function should return early if the vertex is empty
   *  The helper function should place the vertex it accepts into
   *  the visited object and push that vertex into the result array
   *  Loop over all the values in the adjacenyList for that vertex
   *  If any of those values have not been visited, recursively invoke
   *  the helper function with that vertex
   */
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    //Since we are invoking using an anonymous
    //function, we need to initialise the 'this' context here
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      //base
      if (!vertex) return;
      //initially place visited to true
      visited[vertex] = true;
      result.push(vertex);
      //loop over adjacency list for neighbours
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          dfs(neighbour);
        }
      });
    })(start);
    return result;
  }

  /**
   * DFS - iterative
   * The function should accept a value
   * create a stack to help us keep track of vertices(use a list/array)
   * Create a list to store the end result, to be returned at the very end
   * create an object to store visited vertices
   * Add the vertex to the stack, and mark it visited
   * while the stack stack has something in it
   *  pop the next vertex from the stack
   *  if that vertex has nt been visited yet:
   *    mark it as visited
   *    add it to the result list
   *    Push all of its neighbours into the stack
   */
  depthFirstIterative(start) {
    const visited = {};
    const result = [];
    const stack = [start];
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      //access neighbours
      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return result;
  }

  /**
   * DFS - iterative
   * The function should accept a value
   * create a queue (use an array) and place the starting vertex in it
   * Create an array to store the nodes visited
   * Create an object to store nodes visited
   * Mark the starting vertex as visited
   * loop as long as there is anything in queue
   * Remove the first vertex from the queue and
   * push it into array that stores nodes visted
   * loop over each vertex in the adjacenty list for
   * the vertex we are visiting
   * if not inside the object that stores visited,
   * mark it as visited and enqueue the vertex
   * return the visited nodes
   */
  breadthFirstIterative(start) {
    const visited = {};
    const result = [];
    const queue = [start];
    let currentVertex;

    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      //access neighbours
      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
}

// console.log('**********ADD VERTEX************');
// let newGraph = new Graph();
// newGraph.addVertex('Tokyo');
// newGraph.addVertex('Dallas');
// newGraph.addVertex('Aspen');
// newGraph.addVertex('Chicago');
// console.log(newGraph);
// console.log('**********ADD EDGE ************');
// newGraph.addEdge('Tokyo', 'Dallas');
// newGraph.addEdge('Dallas', 'Aspen');
// newGraph.addEdge('Chicago', 'Aspen');
// console.log(newGraph);
// console.log('**********ADD EDGE ************');
// //newGraph.removeEdge('Tokyo', 'Dallas');
// //newGraph.removeEdge('Dallas', 'Aspen');
// console.log(newGraph);
// console.log('**********REMOVE VERTEX ************');
// newGraph.removeVertex('Dallas');
// console.log(newGraph);

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
console.log('***********DFS-RECURSIVE*************');
let d = g.depthFirstRecursive('A');
console.log('after dfs:', d);
console.log('***********DFS-ITERATIVE*************');
let I = g.depthFirstIterative('A');
console.log('after dfs: iterative', I);
console.log('***********BFS-ITERATIVE*************');
let bfs = g.breadthFirstIterative('A');
console.log('after dfs: iterative', bfs);

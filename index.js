//Node for tree
class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Insert
   * Create a new node
   * Starting at the root,
   *  Check if there is a root, if not, the root now becomes that new node
   *  if there is a root,
   *    check if the value of the new node >= value of the root
   *      if it's greater,
   *        Check to see if there is a node to right
   *          if yes, move to that node and repeat the steps
   *          if not, add that node as right property
   *      if it's less
   *         Check to see if there is a node to the left
   *           if yes, move to that node and repeat these steps
   *           if not, add that node as the left property
   */

  insert(value) {
    let newNode = new Node(value);
    //check if there is not root
    if (this.root === null) {
      //assign the value as new root
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        //as we dont have any parameter to control
        if (value === current.value) return this;
        /* check for the left side portions */
        if (value < current.value) {
          if (current.left === null) {
            //There s nothing on the left
            current.left = newNode;
            return this;
          } else {
            //repeat by reassigning the current left
            current = current.left;
          }
        }
        /* check for the right side portions */
        if (value > current.value) {
          if (current.right === null) {
            //There s nothing on the left
            current.right = newNode;
            return this;
          } else {
            //repeat by reassigning the current right
            current = current.right;
          }
        }
      }
    }
  }

  /**
   * Starting at the root
   * If there is not root, we are done searching
   * If there s a root, check if value is equal to
   * the root, and if yes return it
   * Initialise a current root(this.root) and found(boolean) variable
   * If not,
   *  Check if value > value of root
   *    If Yes
   *      Check if there is a node to right
   *        if yes
   *           move to that node and repeat the process
   *        if no
   *            if not, we are done searching
   *    If No
   *       Check if there is a node to left
   *        if yes
   *           move to that node and repeat the process
   *        if no
   *            if not, we are done searching
   */
  find(value) {
    if (this.root === null) return undefined;
    let current = this.root;
    let found = false;
    while (current && !found) {
      //left side search
      if (value < current.value) {
        current = current.left;
      }
      //right side search
      else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  /**
   * Explanation:
   * -------------
   * Initialize Queue: Start with an empty queue and enqueue the root node.
   * While Loop: Continue the loop until the queue is empty.
   * Dequeue Node: Remove the front node from the queue and process it (e.g., print its value).
   * Enqueue Children: Add all the child nodes (left and right) of the current node to the queue.
   * Repeat
   */
  BFS() {
    let queue = [];
    let visitedNodes = [];
    let node = this.root;
    //Push the root node into the queue for the first time
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visitedNodes.push(node.value);
      if (node.left) queue.push(node.left); //connecting statement for while
      if (node.right !== null) queue.push(node.right); //connecting statement for while
    }
    return visitedNodes;
  }

  /**
   * DFS
   * Create a variable to store the values of nodes visited
   * Store the root of the BST in a variable
   * Write a helper function which accepts the value
   *    push the value of the node to the variable that stores the values
   *    if the node has a left property,
   *        call the helper with left property on the node
   *    if the node has a right property,
   *        call the helper with right property on the node
   * Invoke the helper function with the current variable
   * Return the array
   */
  DfsPreOrder() {
    let current = this.root;
    let data = [];

    function traverseDFS(node) {
      data.push(node.value);
      if (node.left) {
        traverseDFS(node.left);
      }
      if (node.right) {
        traverseDFS(node.right);
      }
    }
    traverseDFS(current); //main recursive starts here
    return data;
  }

  /**
   * DFS
   * Create a variable to store the values of nodes visited
   * Store the root of the BST in a variable
   * Write a helper function which accepts the value
   *    if the node has a left property,
   *        call the helper with left property on the node
   *    if the node has a right property,
   *        call the helper with right property on the node
   *    push the value of the node to the variable that stores the values
   * Invoke the helper function with the current variable
   * Return the array
   */
  DfsPostOrder() {
    let current = this.root;
    let data = [];

    function traverseDFS(node) {
      if (node.left) {
        traverseDFS(node.left);
      }
      if (node.right) {
        traverseDFS(node.right);
      }
      data.push(node.value); //this is the only diff between preorder
    }
    traverseDFS(current); //main recursive starts here
    return data;
  }

  /**
   * DFS
   * Create a variable to store the values of nodes visited
   * Store the root of the BST in a variable
   * Write a helper function which accepts the value
   *    if the node has a left property,
   *        call the helper with left property on the node
   *    push the value of the node to the variable that stores the values
   *    if the node has a right property,
   *        call the helper with right property on the node
   * Invoke the helper function with the current variable
   * Return the array
   */
  DfsInOrder() {
    let current = this.root;
    let data = [];

    function traverseDFS(node) {
      if (node.left) {
        traverseDFS(node.left);
      }
      data.push(node.value); //this is the only diff
      if (node.right) {
        traverseDFS(node.right);
      }
    }
    traverseDFS(current); //main recursive starts here
    return data;
  }
}

//      10
//    6     15
//  3   8     20

console.log('********** INSERT ***********');
let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log(bst);
console.log('********** BFS ***********');
let data = bst.BFS();
console.log(data);
console.log('********** DFS- preOrder ***********');
let preResponse = bst.DfsPreOrder();
console.log(preResponse);
console.log('********** BFS - postOrder***********');
let postResponse = bst.DfsPostOrder();
console.log(postResponse);
console.log('********** BFS - inOrder***********');
let inOrderResponse = bst.DfsInOrder();
console.log(inOrderResponse);

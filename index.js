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
}

//      10
//    5     13
//  2   7  11 16

console.log('********** INSERT ***********');
let bst = new BinarySearchTree();
bst.insert(JSON.stringify(30, null, 2));
console.log(bst);

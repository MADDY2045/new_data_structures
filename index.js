/**
 * What is a Singly Linked List?
 * A singly linked list is a linear data structure where elements, called nodes, are sequentially linked together. 
 * Each node contains two parts:
 * -----------------------------
 * Data: The value stored in the node.
 * Next: A reference to the next node in the sequence.
 * structure:
 * ----------
 class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null; // points to the next node in the list
  }
}
*/

/**
 * Applications of Singly Linked Lists
 * Implementing Stacks and Queues: Due to their dynamic nature.
 * Adjacency Lists in Graphs: Efficient storage and traversal.
 * Memory Management: Using pointers, which is useful for managing memory dynamically.
 * Advantages and Disadvantages
 * ----------------------------
 * Advantages:
 * -----------
 * Dynamic size.
 * Efficient insertions/deletions.
 * Disadvantages:
 * -------------
 * No efficient random access.
 * Extra memory space for storing pointers.
 */

//Singly linked lists - pushing
/**
 * Pseudocode
 * ---------
 * Function should accept a value
 * Create a new node using the value passed
 * if there is no head, set the head and tail to be new one
 * and set the tail property on the list to be the newly
 * created node
 * Increment the length by one
 */

//create a singly linked lists
//create a base node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //create a singly linked lists with push function
  //Steps
  /*
  1) Create a constructor that contains head, tail and length
  2) create a push function that accepts a value
  3) Create a new node and check if there exists a head already, if not
  4) initialise head and tail to new Node 
  5) else point the tail to the new node and pointer of the tail to new node
  6) increment the length
  7) return the context(this)
*/
  push(val) {
    let newNode = new Node(val); //passing the argument here
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      //add the next for the current tail
      this.tail.next = newNode;
      //make the newNode as new tail
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  /**
   * Traverse
   * Till there 's a current value , do something
   * increment the current head to next inside the while
   */

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  /**
   * Pop
   * If there are no nodes in the list, return undefined
   * Else loop thr' the list until you reach the tail
   * Set the next property of the 2nd to last node to be null
   * Set the tail to be the 2nd to last node
   * Decrement the length of the list by 1
   * Return the value of the node removed
   */
  pop() {
    //base
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    //append the new tail to the current context
    this.tail = newTail;
    //make the tail's next thing to null(important)
    this.tail.next = null;
    //decrement the list' length
    this.length--;
    if (this.length === 0) {
      //make head and tail to be null
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  /**
   * Shift
   * If there are no nodes, return undefined
   * Store the current head property in a variable
   * Set the head property to be current head's next property
   * decrement the length by one
   * return the value of the node removed
   */
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    return current;
  }

  /**
   * Unshift
   * Create a function that accepts a value
   * Create a new node using the value passed
   * if there is no head property, set the head
   * and tail to be the newly created one
   * else , set the newly created node's next property
   * to be the current head property in the list
   * Set the head property on the list to be that newly
   * created node
   * increment the list by 1
   * return this
   */
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Get
   * This function should accept an index
   * If the index is less than zero or greater
   * than or equal to the length of the list, return null
   * Loop thr the list until you reach the index and return
   * the node at that specific index
   */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  /**
   * Set or update
   * This function accepts a value and an index
   * Use your get function to find the specific node
   * if the node is found, set the value of that node to
   * the value passed to the function and return true;
   */
  set(index, val) {
    let getValue = this.get(index);
    if (!getValue) return false;
    else {
      getValue.val = val;
      return true;
    }
  }

  /**
   * Insert
   * Create a function that accespts index and the value
   * Create a newnode
   * if the index is less than or greater than the length,
   * return false
   * if the index is same as the length, push a new node to
   * the end of list
   * if the index is 0, unshift a new node to the start
   * of the list
   * Otherwise, using the get method, access the node at the
   * index - 1 position
   * set the next property on that node to be new node
   * set the next property on the new node to be the previous next
   * increment the length
   * return true
   */
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      return !!this.unshift(val); //doubly negating to get boolean if we have a val back
    } else if (index === this.length) {
      return !!this.push(val);
    } else {
      let newNode = new Node(val);
      let prevIndex = this.get(index - 1);
      let temp = prevIndex.next; //storing current value to avoid data loss when we do prev.next
      prevIndex.next = newNode;
      newNode.next = temp;
    }
    this.length++;
    return true;
  }

  /**
   * Remove
   * If the index is less than zero or greater than
   * the length, return undefined
   * If the index is same as the length -1 , pop()
   * if the index is 0, shift()
   * Otherwise, using the get method, get the index - 1
   * set the next property on that node to be the next
   * of the next node
   * decrement the length
   * return the value of the node removed
   */
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length - 1) {
      return this.pop();
    } else if (index === 0) {
      return this.shift();
    } else {
      let prevNode = this.get(index - 1);
      let removableValue = prevNode.next;
      let prevsNextNode = removableValue.next;
      prevNode.next = prevsNextNode;
      this.length--;
      return removableValue;
    }
  }

  /**
   * Reversing a list
   * initialise current(node)
   * swap current to tail
   * initialise prev and next to null
   * swap tail to current from node variable
   * loop thr till the list length
   * inside that,
   * temporarily store the next node against current node variable
   * reverse the current node pointer to prev
   * move prev and current one step forward
   * return the prev as new head
   */
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return prev; // New head of the reversed list
  }
}

let d = new SinglyLinkedLists();
d.push('Hi');
d.push('Hello!');
d.push('How are you');
console.clear();
console.log('*********** PUSH *******');
console.log(JSON.stringify(d, null, 2));
console.log('*********** TRAVERS *******');
d.traverse();
console.log('*********** POP *******');
d.pop();
d.pop();
console.log('after popping:', d);
console.log('*********** SHIFT *******');
d.push('Java');
console.log('shifted node', d.shift());
console.log('after shifting:', d);
console.log('********* UNSHIFT *********');
d.push('Java');
console.log('shifted node', d.unshift('Mango'));
d.push('Billa');
console.log('after unshifting:', d);
console.log('********* GET *********');
let getIndex = d.get(0);
console.log('getIndex', getIndex);
console.log('********* SET/UPDATE *********');
console.log('before setting', d.get(0));
d.set(0, 'Banana');
console.log('after setting', d.get(0));
console.log('********* INSERT *********');
console.log(d.insert(4, 'Apple'));
console.log('after insert:', d);
console.log(d.get(3));
console.log('********* REMOVE *********');
console.log('before removing:', d.get(2));
console.log('removed value:', d.remove(2));
console.log('********* REVERSE *********');
console.log('before reversing:', JSON.stringify(d, null, 2));
console.log('removed value:', d.reverse());
console.log('after reversing:', JSON.stringify(d, null, 2));

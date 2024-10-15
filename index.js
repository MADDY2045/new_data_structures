//create a Doubly linked lists
//create a base node class
/**
 * Big O
 * -----
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(N)
 * Access - O(N)
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * create a Doubly linked lists with push function to push the data at the last
   * Create a new node with the value passed to the function
   * If the head property is null, set the head and tail to be the
   * newly created node
   * if not, set the next property on the tail to be that node
   * set the previous property on the newly created node to be tail
   * set the tail to be the newly created one
   * increment the length
   *
   */
  push(val) {
    let newNode = new Node(val); //passing the argument here
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      //set the next property on the tail to new node
      this.tail.next = newNode;
      //set the previous property on the newly created node to be tail
      newNode.prev = this.tail;
      //make the newNode as new tail
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Pop
   * If there is no head, return undefined
   * Store the current tail in a variable to return later
   * if the length is 1, set the head and tail to be null
   * Update the tail to be previous node
   * set the new tail's next to null
   * decrement the length
   * return the value removed
   */
  pop() {
    if (!this.head) return undefined;
    else {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      }
      let currentTail = this.tail;
      this.tail = currentTail.prev;
      this.tail.next = null; //severing the last node's next
      currentTail.prev = null; //chop the second connection
      this.length--;
      return currentTail;
    }
  }

  /**
   * Shift
   * If length is 0, return undefined
   * Store the current head property in a variable(old head)
   * if the length === 1 ,
   * set the head to null
   * set the tail to null
   * else, update the head to the next of old head
   * set the head's prev property to null
   * set the old head next to null
   * decrement the length
   * return old head
   */

  shift() {
    if (this.length === 0) return undefined;
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let oldHead = this.head;
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
      this.length--;
      return oldHead;
    }
  }

  /**
   * Unshift
   * Create a new node with the passed value
   * if the length is 0, set the head and tail to be new node
   * else,
   * set the prev property on the head of the list to new node
   * set the next property of new node to current head
   * assign the new node as new head
   * increment the length
   * return the list
   */
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentHead = this.head;
      currentHead.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  /**
   * If the index is less than 0 or greater than or equal to
   * the length, return null
   * if the index is less than or equal to half the length of the list,
   *    loop thr the list starting from the head and loop towards the middle
   *    return the node once it's found
   * if the index is greater than half the length of the list
   *    loop thr the list starting from the tail and loop towards the
   *    middle
   *    Return the node once it's found.
   */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  /**
   * Set
   * Create a variable which is the result
   * of the get method at the index passed to the function
   * If the method returns valid node, set the value
   * of that node to be the value passed to the function
   * return true
   */
  set(index, val) {
    let getIndexValue = this.get(index);
    if (!getIndexValue) return false;
    else {
      getIndexValue.val = val;
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
   * Set the prev and next nodes accordingly ,
   * between beforeNode <-> newNode <->afterNode
   * increment the length
   * return true
   */
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
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
   * set the prev and next for removable and next nodes accordingly
   * decrement the length
   * return the value of the node removed
   */
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var removedNode = this.get(index);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

console.clear();
console.log('****** PUSH *******');
let d = new DoublyLinkedLists();
d.push('Maddy');
d.push('Diviksha');
d.push('Prithik');
console.log(d);
console.log('****** POP *******');
d.pop();
console.log(d);
console.log('****** SHIFT *******');
d.push('Sudha');
d.push('Karthi');
d.shift();
console.log(d);
console.log('****** UNSHIFT *******');
d.unshift('Surya');
console.log(d);
console.log('****** GET *******');
let getData = d.get(0);
console.log('getData::', getData);
console.log('****** SET *******');
d.set(0, 'Sachin Tendulkar');
console.log(d);
console.log('****** INSERT *******');
d.insert(2, 'Ajay Jadeja');
console.log(d.get(2));
console.log('****** REMOVE *******');
d.remove(4);
d.remove(2);
console.log(d);

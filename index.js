/**
 * Binary heaps are fascinating data structures, mainly used to implement priority queues, and they come in two flavors:
 * Min-Heaps and Max-Heaps.
 *
 *
 * Min-Heap:
 * ---------
 * Property:
 * In a min-heap, the value of each node is greater than or equal to the value of its parent.
 * The smallest element is at the root.
 * Operations:
 * ------------
 * Insertion: Add the new element at the end of the heap, then "bubble up" to maintain heap property.
 * Deletion (Extract Min): Remove the root, replace it with the last element, then "bubble down" to maintain heap property.
 *
 *
 * Max-Heap
 * --------
 * Property:
 * In a max-heap, the value of each node is less than or equal to the value of its parent.
 * The largest element is at the root.
 * Operations:
 * -----------
 * Insertion: Add the new element at the end, then "bubble up".
 * Deletion (Extract Max): Remove the root, replace with the last element, then "bubble down".
 *
 * Structure
 * ----------
 * Array Representation: Binary heaps can be efficiently stored in arrays. For any given index i:
 * The parent node is at index (i-1) // 2.
 * The left child is at index 2*i + 1.
 * The right child is at index 2*i + 2.
 */

class MaxBinaryHeap {
  constructor(args) {
    this.values = [...args];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    let values = this.values;
    while (idx > 0) {
      //parentIndex
      let parentIndex = Math.floor((idx - 1) / 2);
      let parent = values[parentIndex];
      //compare the curretn item with parentItem
      //Using indices calculated
      if (element <= parent) break; //base
      //otherwise
      //swap the values
      values[parentIndex] = element;
      values[idx] = parent;
      //now update the index to be parentidx
      idx = parentIndex;
    }
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  /**
   * Swap the first value in the values property with the last
   * Pop from the values property, so we can return at end
   * Have the new root "sink down" to correct spot
   *  Your parent index starts at 0
   *  Find the index of the left child: 2 * index + 1(should not be out of bound)
   *  Find the index of the right child: 2 * index + 2(should not be out of bound)
   *  If the left or right child is greater than the element..swap.
   *  If both left and right children are larger, swap with the largest child
   *  The child index you swapped becomes the new parent index
   *  keep looping and swapping until neither child is larger than element
   *  Return the old root
   */
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      /**
       * Handle scenarios when both left index
       * and right index are larger than element
       * and right index is largest
       */
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
    }
  }

  extractMax() {
    const max = this.values[0]; //max value
    const end = this.values.pop(); //extract this last variable to sink down
    if (this.values.length > 0) {
      this.values[0] = end;
      //sinkDown
      this.sinkDown();
    }
    return max;
  }
}

console.log('********CREATING HEAP*******');
let heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);
console.log('heap:::', heap);
console.log('********INSERT*******');
heap.insert(55);
heap.insert(1);
console.log('heap after insert:::', heap);
console.log('********EXTRACT*******');
let output = heap.extractMax();
console.log('extracted value:', output);

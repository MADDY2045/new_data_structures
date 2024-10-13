/**
 * Bubble Sort is one of the simplest sorting algorithms, making it an excellent way to understand the basics of sorting.
 * Here's a detailed breakdown of how it works:
 */

/**
 * Bubble Sort is one of the simplest sorting algorithms, making it an excellent way to understand the basics of sorting. 
 * Here's a detailed breakdown of how it works:

Bubble Sort Basics
Concept:
--------
Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. 
This process repeats until the list is sorted.

Algorithm:
-----------
Start from the beginning of the array.
Compare the first two elements.
If the first element is greater than the second, swap them.
Move to the next pair of elements and repeat step 3.
Continue this process until the end of the array.
Repeat the entire process for all elements until no swaps are needed.
*/

/**
 * Detailed Walkthrough
Initialization:
---------------
n is set to the length of the array.
swapped is a boolean flag to track if any swaps were made during the pass.
Outer Loop (do-while):
---------------------
This loop ensures the process repeats until no swaps are needed.
Inner Loop (for):
------------------
Iterates through the array up to n - 1.
Compares each element with its next neighbor.
If the current element is greater, they are swapped.
Swapping:
----------
Using array destructuring, swap arr[i] and arr[i + 1].
Update swapped Flag:
--------------------
If a swap occurs, set swapped to true.
Reduce n:
----------
Decrement n by 1 after each complete pass since the last element is now in its correct position.
Return Sorted Array:
--------------------
The outer loop stops when no swaps are needed, meaning the array is sorted.

Advantages and Disadvantages
Advantages:
------------
Simple to understand and implement.
Good for small datasets or nearly sorted arrays.

Disadvantages:
--------------
Inefficient for large datasets, with a worst-case time complexity of O(n^2).
Not suitable for professional use with large data.
*/

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  // Outer loop to repeat the process
  do {
    swapped = false;

    // Inner loop for comparing and swapping adjacent elements
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements es 2025 syntax
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        /**
         * classical way
         * let temp = arr[i]
         * arr[i] = arr[i+1]
         * arr[i+1] = temp
         */
        swapped = true;
      }
    }

    // Reduce the array size by one after each complete pass
    n--;
  } while (swapped);

  return arr;
}

// Example usage
const array = [5, 1, 4, 2, 8];
console.log(bubbleSort(array)); // Output: [1, 2, 4, 5, 8]

/**
 * Selection Sort Basics
 * Concept:
 * Selection Sort works by dividing the array into a sorted and an unsorted region.
 * It repeatedly selects the smallest (or largest, depending on the order) element
 * from the unsorted region and moves it to the sorted region.
 *
 *
 * Algorithm:
 * ----------
 * Start with the first element as the minimum.
 * Compare this element with the next elements to find the smallest element in the unsorted region.
 * Swap the smallest element found with the first element.
 * Move the boundary between the sorted and unsorted regions one element to the right.
 * Repeat the process for the next element until the array is sorted.
 */

/**
 * Detailed Walkthrough
 * --------------------
 * Initialization:
 * ----------------
 * n is set to the length of the array.
 * The outer loop starts from the first element to the second-to-last element.
 * Find the Minimum:
 * -----------------
 * For each position i, assume the element at index i is the smallest (minIndex = i).
 * The inner loop starts from the element next to i and looks for the smallest element in the unsorted region.
 * Comparison and Update:
 * ----------------------
 * If a smaller element is found (arr[j] < arr[minIndex]), update minIndex to the index of this smaller element.
 * Swap Elements:
 * ---------------
 * After the inner loop completes, if minIndex is not equal to i, swap the element at minIndex with the element at i.
 * This move ensures that the smallest element of the unsorted region is placed at the beginning of this region.
 * Continue:
 * ---------
 * Repeat the process for each element in the array until the array is sorted.
 */

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the first element of the unsorted region is the minimum
    let minIndex = i;

    // Find the minimum element in the unsorted region
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted region
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example usage
const arraySample = [64, 25, 12, 22, 11];
console.log(selectionSort(arraySample)); // Output: [11, 12, 22, 25, 64]

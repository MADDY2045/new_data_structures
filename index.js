/**
 * Merge Sort is a powerful, efficient, and stable sorting algorithm with a time complexity of 
 * O(n log n). It uses a divide-and-conquer approach to sort an array
 * Steps for Merge Sort
 * ---------------------
 * Divide: Split the array into two halves until each subarray contains a single element.
 * Conquer: Recursively sort the subarrays.Combine: Merge the sorted subarrays to produce new sorted subarrays 
 * until the whole array is sorted.

*/

/**
 * Detailed Explanation
 * --------------------
 * Base Case:
 * ---------
 * If the array has one or zero elements, it is already sorted, so return it as is.
 * if (arr.length <= 1) {
 * return arr;
 * }
 * Divide:
 * -------
 * Find the middle index of the array to split it into left and right subarrays.
 * Recursively call mergeSort on the left and right subarrays.
 * const mid = Math.floor(arr.length / 2);
 * const left = arr.slice(0, mid);
 * const right = arr.slice(mid);
 * Merge:
 * ------
 * Define a merge function to merge two sorted arrays.
 * Use two pointers (leftIndex and rightIndex) to compare elements from both arrays and push the smaller element to the result array.
 * Once one of the arrays is exhausted, concatenate the remaining elements from the other array.
 */

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate any remaining elements from left or right
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array)); // Output: [3, 9, 10, 27, 38, 43, 82]

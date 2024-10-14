function pivot(arr, start = 0, end = arr.length - 1) {
  /*
      create a swap helper
      initialize a swapindex
      create a pivot index usually start
      loop thr the array from one to next to start index till end
      if pivot is greater than,
      increment the swapindex and swap the position of swapindex 
      and current arr elemrnt
      repeat the process
      once , coming outside the loop, swap the start index with swapindex
  */

  /**
   * Steps for Quick Sort
   * Choose a Pivot:
   * --------------
   * Select a pivot element from the array. Various methods can be used to choose the pivot, such as picking the first, last, or a random element.
   * Partitioning:
   * -------------
   * Rearrange the array so that all elements less than the pivot come before it and all elements greater than the pivot come after it.
   * The pivot is now in its correct position.
   * Recursively Apply:
   * ------------------
   * Recursively apply the same process to the subarrays formed by splitting the array at the pivot.
   */
  const swap = (arr, i, j) => {
    return ([arr[i], arr[j]] = [arr[j], arr[i]]);
  };

  let swapindex = 0;
  let pivot = arr[start];
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapindex++;
      swap(arr, arr[i], swapindex);
    }
  }
  swap(arr, start, swapindex);
  return swapindex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  /*
      if the left pointer is less than right pointer
      get the pivot index using the helper 
      based on its return value,
      recursively call quicksort for left set of 
      elements from start to pivotIndex -1 
      and to the right from pivotIndex + 1 till 
      arr.length
      finally return the arr;
  */
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

/**
 *
 * @param {*} arr
 * @returns {Array}
 * Alternate approach
 */
function quickSort(arr) {
  // Base case: If the array has one or zero elements, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot element (here, we choose the last element)
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  // Partitioning the array into left and right subarrays
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sorting left and right subarrays, and combining them with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const array = [29, 10, 14, 37, 13];
console.log(quickSort(array)); // Output: [10, 13, 14, 29, 37]

console.log(quickSort([9, 4, 1, 2, 3, 5, 6, 7]));

/**
 * Divide and conquer
 * This Pattern involves dividing a data set into
 * smaller chunks and then repeating a process
 * with a subset of data
 *
 * This pattern can reduce time complexity ver much
 */

//Problem
/**
 * Search an element in an array
 * Given a sorted array of integers, write a search
 * function that accepts an array and integer and
 * returns the index where the value is located
 * based on the number we pass in as second argument
 */

/**
 * Approach
 * ----------
 * We adopt divide and conquer method
 * we will use the median value adjusted to and fro to get the search result
 * For that
 * Initialise a min and max value
 * Then till min is less than or equal to max,
 * get the middle currentElement value and check if that value is equal to the target search, if Yes
 * return that middle
 * or else if currentElement value is greater than target => max = middle - 1
 * or else if currentElement value is less than target => min = middle + 1
 * return -1 as fallback
 *
 *    *--------------*--------------*
 *   Min            Middle           Max
 */

function search(arr, num) {
  /* intialize variables for tempSum and maxSum */
  let min = 0;
  let max = arr.length - 1;
  //baseCheck
  if (arr.length === 0 || !num) return null;

  while (min <= max) {
    //get the middle value
    let middle = Math.floor((max + min) / 2);
    let currentElement = arr[middle];
    if (currentElement === num) {
      return middle;
    } else if (currentElement > num) {
      max = middle - 1;
    } else if (currentElement < num) {
      min = middle + 1;
    }
  }
  return -1;
}

console.log(search([1, 2, 5, 8, 1, 5], 2)); //output 1
console.log(search([1, 2, 5, 2, 8, 1, 4], 4)); //output 6
console.log(search([], 4)); //null

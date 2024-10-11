/**
 * Multiple pointers
 * Creating pointers / values that correspond to an
 * index or position and move towards the beginning
 * , end or middle based on a certain condition
 *
 * Very efficient for solving problems with
 * minimal space complexity
 */

//Problem
/**
 * Write a function to sumZero of a given sorted array that will return the first available array pairs
 * that sums upto zero and return the array as pairs
 * else return []
 */

let inputOne = [1, 2, 5, -2, 9]; //output [2,-2]
let inputTwo = [3, 2, 5, -2, 9, -3]; //output [3,-3]
let inputThree = [3, 2, 5, 2, 9, 3]; //output []

/**
 * Approach
 * ----------
 * We adopt two pointer techniques as the array is sorted
 * Will initialize left and right pointers
 * Will check if left < right, and sum of the two values are zero
 * if "zero" , return the pairs as left and right
 * else if sum > 0, we need to decrease the right pointer
 * else increase the left pointer
 * finally , if nothing is true, return empty array
 */

function sumZero(arr) {
  //initialise pointers
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}

// console.log(sumZero(inputOne));
// console.log(sumZero(inputTwo));
// console.log(sumZero(inputThree));

//countUniqueValues

/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
 * There can be negative numbers in the array, but it will always be sorted.
    countUniqueValues([1,1,1,1,1,2]) // 2
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
    countUniqueValues([]) // 0
    countUniqueValues([-2,-1,-1,0,1]) // 4
    Time Complexity - O(n)
    Space Complexity - O(n)
*/

function countUniqueValues(arr) {
  /**
   * let's use a two pointer technique to countUniqueValues
   * Approach
   * Initialise the left pointer to zero
   * right pointer to left + 1
   * loop through right till end of array and see if the arr[left] is not
   * equal to arr[right] and if yes, increment the left by one and replace the
   * current arr[left] with arr[right] value
   * return the next left pointer
   */

  //basecheck
  if (arr.length === 0) return 0;
  let left = 0;
  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }
  return left + 1; //positions to the next index value
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

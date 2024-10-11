/**
 * Sliding Window
 * This Pattern involves creating a window which can be
 * an array/number/strimg from one position to another
 * Depending on a certain condition, the window either
 * increases or closes and a new window is created
 *
 * usecase:
 * Very Useful for keeping track of a subset of data in
 * an array/string etc.
 */

//Problem
/**
 * maxSubArraySum
 * Write a function called maxSubArraySum
 * which accepts an array of integers and a
 * number called n and returning the max sum
 * of n consecutive elements in the array
 */

/**
 * Approach
 * ----------
 * We adopt sliding window technique
 * will initialise a tempsum to zero and maxSum to zero
 * Will get the sum of n passed numbers from array and store it in the maxSum
 * And now, using sliding window, will loop through the array starting from num to end of array
 * and get the tempsum = maxSum - <old first index element> + <current available element>
 * now get the max b/w tempsum and maxsum and assign it to maxSum and repeat the process
 * finally return the maxSum
 */

function maxSubArraySum(arr, num) {
  /* intialize variables for tempSum and maxSum */
  let tempSum = 0;
  let maxSum = 0;
  //basecheck
  if (arr.length === 0 || !num) return null;
  /* get the sum of n passed numbers */
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  for (let i = num; i < arr.length; i++) {
    //tempsum = maxSum - <old first index element> + <current available element>
    tempSum = maxSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); //output 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); //output [3,-3]
console.log(maxSubArraySum([], 4)); //null

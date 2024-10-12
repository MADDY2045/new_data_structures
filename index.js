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

// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); //output 10
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); //output [3,-3]
// console.log(maxSubArraySum([], 4)); //null

/**
 * minSubArrayLen
 * Step-by-Step Explanation:
Initialize Variables:
---------------------
minLength to store the minimum length of the subarray found. Initially set to Infinity.
left pointer to represent the start of the window.
sum to keep track of the current sum of the window.
Expand the Window:
------------------
Use a right pointer to expand the window by iterating through the array.
Shrink the Window:
------------------
Whenever the sum of the current window is greater than or equal to the target, update minLength and then 
shrink the window from the left by moving the left pointer to the right.
Continue Until the End:
-----------------------
Continue this process until the right pointer reaches the end of the array.
Result:
-------
After iterating through the array, if minLength is still Infinity, it means no valid subarray was found, so return 0. 
Otherwise, return minLength.
*/

/**
 * Detailed Walkthrough:
 * ---------------------
 * Initialization:
 * ---------------
 * minLength is set to Infinity to ensure any valid subarray length found will be smaller.
 * left is set to 0, and sum is set to 0.
 * First Iteration (right = 0):
 * ----------------------------
 * Add arr[right] (which is 2) to sum. Now sum is 2.
 * sum is less than target, so move right to the next index.
 * Second Iteration (right = 1):
 * -----------------------------
 * Add arr[right] (which is 3) to sum. Now sum is 5.
 * sum is less than target, so move right to the next index.
 * Third Iteration (right = 2):
 * ----------------------------
 * Add arr[right] (which is 1) to sum. Now sum is 6.
 * sum is less than target, so move right to the next index.
 * Fourth Iteration (right = 3):
 * ------------------------------
 * Add arr[right] (which is 2) to sum. Now sum is 8.
 * sum is greater than or equal to target. Calculate the length of the current subarray (right - left + 1) which is 4. Update minLength to 4.
 * Subtract arr[left] (which is 2) from sum and increment left to 1. Now sum is 6.
 * Continue Shrinking:
 * ------------------
 * sum is still greater than or equal to target. Calculate the length of the current subarray (right - left + 1) which is 3.
 * Update minLength to 3.
 * Subtract arr[left] (which is 3) from sum and increment left to 2. Now sum is 3.
 * Subsequent Iterations:
 * ----------------------
 * Continue this process until the right pointer reaches the end of the array.
 * By the end of the loop, the minimum length of the subarray that meets the condition will be found. If no such subarray exists,
 * minLength will remain Infinity and the function will return 0.
 */

function minSubArrayLen(arr, target) {
  let minLength = Infinity;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum >= target) {
      //length of the subArray = right - left + 1
      minLength = Math.min(minLength, right - left + 1);
      //Subtract arr[left]
      sum -= arr[left];
      /*Shrink the Window by increasing the left pointer*/
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

// Example usage
const array = [2, 3, 1, 2, 4, 3];
const target = 7;
console.log(minSubArrayLen(array, target)); // Output: 2 (because [4, 3] is the smallest subarray)

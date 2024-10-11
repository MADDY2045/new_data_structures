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

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

/**
 *
 * @param  {...any} args
 * @returns {Boolean}
 */
function areThereDuplicates(...args) {
  /**
   * Approach
   * Since we are using two pointers method, args need to be sorted
   * Then initialize start and next to be 0 and 1
   * Then loop till next is less than actual args array, and check if
   * args[start] is equal to args[next], if yes return true
   * else increment start++ and next++ and continue the process
   * Finally return false , if no duplicates are found
   */
  args.sort(); // Sort the arguments first
  console.log(args);
  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] == args[next]) {
      return true;
    }
    start++;
    next++;
  }

  return false;
}

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); //true

/**
 * Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in 
the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)
Sample Input:
*/

function averagePair(arr, targetAverage) {
  if (arr.length === 0) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;

    if (average === targetAverage) {
      return true;
    } else if (average < targetAverage) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false

/**
 * Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a 
subsequence of the characters in the second string. In other words, the function should check whether the characters in the first 
string appear somewhere in the second string, without their order changing.

Examples:
---------
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

/**
 * Approach
 * Here, str1 is the string to be checked as a subsequence, and str2 is the target string.
 * Two pointers i and j are used to traverse str1 and str2 respectively.
 * If characters match, i is incremented, and j always moves forward. By the end, if i reaches the length of str1,
 * it means all characters of str1 were found in order within str2.
 */
function isSubsequence(str1, str2) {
  //initialise i and j to be 0
  let i = 0;
  let j = 0;
  while (i < str1.length && j < str2.length) {
    //increment i only when chars of both strings are matching
    if (str1[i] === str2[j]) {
      i++;
    }
    //always increment j
    j++;
  }

  return i === str1.length;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

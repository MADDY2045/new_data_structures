/**
 * Radix Sort is a non-comparative integer sorting algorithm.
 * It sorts numbers by processing individual digits, starting from the least significant digit to the most significant digit.
 * Steps for Radix Sort
 * ---------------------
 * Determine the number of digits in the largest number:
 * -----------------------------------------------------
 * This helps in deciding the number of iterations required.
 * Iterate from the least significant digit to the most significant digit:
 * For each digit place, group numbers based on the current digit.
 * Concatenate the groups to form a sorted array based on the current digit:
 * Repeat the process for the next digit place.
 * Helper Functions
 * ----------------
 * Get Digit:
 * ----------
 * Extracts the digit at a given place value.
 * Digit Count:
 * ------------
 * Counts the number of digits in a number.
 * Most Digits:
 * ------------
 * Finds the number with the most digits in an array.
 */

//Radix sort
function getDigit(num, place) {
  //Get the abs num to handle negative numbers
  //Then shift the number to the digits most place we want using Math.Pow
  //Get the Math.flooer number of abs number divided by Math.Pow()
  //Use modulo operation to get the digit
  let numerator = Math.abs(num);
  let denominator = Math.pow(10, place);
  let digit = Math.floor(numerator / denominator) % 10;
  return digit;
}

function digitCount(num) {
  //return Math.abs(num).toString().length;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  //get the mostDigits from helper
  let maxDigits = mostDigits(nums);
  //loop thr maxDigits
  for (let k = 0; k < maxDigits; k++) {
    //create an array bucket of size 10
    let digitBucket = Array.from({ length: 10 }, () => []);
    //loop thr nums and get the digit of that respective
    //bucket index into digitBucket
    for (let i = 0; i < nums.length; i++) {
      let digitIndex = getDigit(nums[i], k); //k is the digit iteration
      digitBucket[digitIndex].push(nums[i]);
    }
    //extract the individual order of numbers from 2d array digitBucket
    nums = [].concat(...digitBucket);
  }
  return nums;
}
console.log(getDigit(12345, 3));
console.log(digitCount(12345098098));
console.log(radixSort([8798, 97797, 1, 44, 2, 3434, 64434, 4]));

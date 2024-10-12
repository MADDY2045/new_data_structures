/**
 * Math.pow()
 * Step-by-Step Explanation:
 * Base Case:
 * If n is 0, return 1 (since any number raised to the power of 0 is 1).
 * If n  is 1, return x (since any number raised to the power of 1 is the number itself).
 * Recursive Case:
 * If n is even, recursively calculate
 * pow(x,n/2) and square the result.
 * If n is odd, multiply x with the result of the recursive call pow(x,n−1).
 */

/**
 * Detailed Walkthrough:
 * Initialization:
 * ----------------
 * pow(x, n) is the recursive function.
 * Base Cases:
 * If n is 0, return 1.
 * If n is 1, return x.
 * Recursive Case:
 * ---------------
 * For even n:
 * Divide n by 2 and recursively call pow(x, n/2). Square the result to get x^n.
 * For odd n:
 * Subtract 1 from n
 * to make it even, and then multiply the result of the recursive call pow(x, n-1) by x.
 * Result:
 * By repeatedly breaking down the problem using the recursive approach, you calculate
 * x^n efficiently.
 */
function pow(x, n) {
  if (n === 0) return 1; // Base case
  if (n === 1) return x; // Base case
  return x * pow(x, n - 1);
}

// Example usage
console.log(pow(2, 3)); // Output: 8 (because 2^3 = 8)
console.log(pow(5, 4)); // Output: 625 (because 5^4 = 625)
console.log(pow(2, 0)); // Output: 1 (because 2^0 = 1)
console.log(pow(3, 4)); // Output: 1 (because 2^0 = 1)

/**
 * Factorial
 */
function factorial(n) {
  //base
  if (n === 0) return 1;
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

/**
 * productOfArray
 */
function productOfArray(arr) {
  //base
  if (arr.length === 0) return 1;
  if (
    arr[0] === '' ||
    arr[0] !== undefined ||
    arr[0] === null ||
    Number.isNaN(arr[0])
  ) {
    console.log('entered arr[0]:', arr[0]);
    return arr[0] * productOfArray(arr.splice(1));
  } else {
    console.log('entered here');
    //just ignore the element and continue
    return productOfArray(arr.splice(1));
  }
}

console.log(productOfArray([1, 2, , 5, , , , 3, 3, 5]));

/**
 * Fibonacci
 * ---------
 * Detailed Walkthrough:
 * Base Cases:
 * -----------
 * If n is 0, return 0. (The 0th Fibonacci number is 0).
 * If n is 1, return 1. (The 1st Fibonacci number is 1).
 * Recursive Case:
 * ---------------
 * For any n > 1, return the sum of fibonacci(n - 1) and fibonacci(n - 2), which is the essence of the Fibonacci sequence.
 * Iterate and Display:
 * The example usage demonstrates iterating from 0 to 9 to display the first 10 Fibonacci numbers.
 */

function fib(n) {
  // add whatever parameters you deem necessary - good luck!
  //base
  if (n < 0) return;
  if (n === 0) return 0;
  if (n === 1) return 1;
  //recursive functions for n-1 and n-2 are the essence of fibonacci series
  return fib(n - 1) + fib(n - 2);
}

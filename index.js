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

/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */
function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  //base
  if (str.length === 0) return;
  if (str.length === 1) return str;
  return str[str.length - 1].concat(reverse(str.slice(0, str.length - 1)));
}

/**
 * isPalindrome
 */
function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  //sanitise the str
  let lowerCaseString = str.replace(/^a-zA-Z0-9/g, '').toLowerCase();
  //basecheck
  if (str.length === 0) return false;
  //helper function to check isPalindrome
  function checkPalindrome(start, end) {
    //base
    if (str[start] >= str[end]) {
      //means that we have checked all the left and right pointers to match each other
      //so it's palindrome
      return true;
    }

    if (str[start] !== str[end]) {
      return false;
    }

    // Move towards the center and continue checking
    checkPalindrome(start + 1, end - 1);
  }
  // Start the recursion from the beginning and end of the string
  return checkPalindrome(0, str.length - 1);
}

/**
 * Write a recursive function called someRecursive which accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the callback.
 * Otherwise it returns false.
 */
function someRecursive(arr, cb) {
  // add whatever parameters you deem necessary - good luck!
  //base
  if (arr.length === 0) return false;

  // Check if the callback returns true for the first element
  //Note: For single element satisfy, make positive assignment
  if (cb(arr[0]) === true) {
    return true;
  }
  // Recursively call the function on the rest of the array
  return someRecursive(arr.slice(1), cb);
}

// Example usage:
const isOdd = (num) => num % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // Output: true (since 1 is odd)
console.log(someRecursive([2, 4, 6, 8], isOdd));
/**
 * Write a recursive function called someRecursive which accepts an array and a callback.
 * The function returns true if all values in the array returns true when passed to the callback.
 * Otherwise it returns false.
 */
function allRecursive(array, callback) {
  // Base case: If the array is empty, return true
  if (array.length === 0) return true;

  // Check if the callback returns true for the first element
  //Note: For all elements satisfy, make negative assignment
  if (!callback(array[0])) return false;

  // Recursively call the function on the rest of the array
  return allRecursive(array.slice(1), callback);
}

const isEven = (num) => num % 2 === 0;

console.log(allRecursive([2, 4, 6, 8], isEven)); // Output: true (since all are even)
console.log(allRecursive([2, 3, 4, 6], isEven)); // Output: false (since 3 is not even)

/**
 * Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 */
function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  //Initialise an array to hold/push the flattened values
  let result = [];

  //create a helper recursive to flatten the array
  function flatHelper(arr) {
    //loop thr each arr element and check for it's Type
    arr.forEach((eachSegment) => {
      if (Array.isArray(eachSegment)) {
        flatHelper(eachSegment);
      } else {
        result.push(eachSegment);
      }
    });
  }

  //Initialise the helper outside
  flatHelper(arr);
  return result;
}

// Example usage
const nestedArray = [1, [2, [3, 4], [[5]]], 6];
console.log(flatten(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]

function capitalizeFirst(arr) {
  // add whatever parameters you deem necessary - good luck!
  //base
  if (arr.length === 0) return [];

  //get the first element of arr
  let firstElement = arr[0];
  //capitalizeFirst letter
  let capitalizeFirstElement = getCapitizedStr(firstElement);

  //using concat, call recursive method to get all array elements capitalized
  return [capitalizeFirstElement].concat(capitalizeFirst(arr.splice(1)));
}

function getCapitizedStr(str) {
  let firstCharCapitalised = str.charAt(0).toUpperCase();
  return firstCharCapitalised + str.slice(1);
}
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

/**
 * Write a recursive function called nestedEvenSum. Return the sum of all
 * even numbers in an object which may contain nested objects.
 */
function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  //initialise sum
  let sum = 0;

  //create a helper function to recursively loop thr keys
  function getHelper(innerObj) {
    //loop thr all keys
    for (let key in innerObj) {
      let value = innerObj[key];
      //Check if the type of value is number and it's even , if so, add it to sum
      if (typeof value === 'number' && value % 2 === 0) {
        sum += value;
      }
      if (typeof value === 'object' && value != null) {
        getHelper(value);
      }
    }
  }

  //call the first recursive helper
  getHelper(obj);
  return sum;
}

// Example usage
const nestedObj = {
  a: 2,
  b: {
    b1: 4,
    b2: {
      b21: 6,
      b22: 'not a number',
    },
    b3: 8,
  },
  c: {
    c1: 'string',
    c2: {
      c21: 10,
      c22: {
        c221: 12,
      },
    },
  },
};

console.log(nestedEvenSum(nestedObj)); //42

/**
 * capitalizeWords for all letters in recursive way
 */
function capitalizeWords(arr) {
  // Base case: if the array is empty, return an empty array
  if (arr.length === 0) return [];

  // Capitalize the first word
  const firstWord = arr[0].toUpperCase();

  // Recursively call capitalizeWords on the rest of the array and combine the results
  return [firstWord].concat(capitalizeWords(arr.slice(1)));
}

/**
 * capitalizeWords for all letters in normal way
 */
function capitalizeWords(strArray) {
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  strArray.forEach((eachElement) => {
    result.push(eachElement.toUpperCase());
  });
  return result;
}

// Example usage
const wordsArray = ['hello', 'world', 'this', 'is', 'recursion'];
console.log(capitalizeWords(wordsArray));

/**
 * stringifyNumbers
 * Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. 
 * Recursion would be a great way to solve this!

The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original. 
Keep the original object unchanged.
*/
function stringifyNumbers(originalObj) {
  //create a new obj
  let obj = {};
  //iterate thr each keys in originalObj
  for (let key in originalObj) {
    let value = originalObj[key];
    if (typeof value === 'number') {
      //stringify that value
      obj[key] = value.toString();
    } else if (
      typeof value === 'object' &&
      !Array.isArray(value) &&
      value !== null
    ) {
      //it's an object and sp continue the recursion
      obj[key] = stringifyNumbers(value);
    } else {
      //keep the value as is
      obj[key] = value;
    }
  }
  return obj;
}

// Example usage
const inputObj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(inputObj));
// Output: { num: '1', test: [], data: { val: '4', info: { isRight: true, random: '66' } } }

/**
 * Write a function called collectStrings which accepts an object and returns an
 * array of all the values in the object that have a typeof string
 */
function collectStrings(obj) {
  let result = [];
  //create a helper function inorder to persist result Array
  function helper(innerObj) {
    for (let key in innerObj) {
      let value = innerObj[key];
      if (typeof value === 'string') {
        result.push(value);
      } else if (typeof value === 'object' && value !== null) {
        helper(value);
      }
    }
  }

  helper(obj);
  return result;
}

// Example usage
const inputObjOne = {
  a: 'hello',
  b: {
    b1: 'world',
    b2: {
      b21: 'foo',
      b22: 42,
    },
    b3: null,
  },
  c: {
    c1: 'bar',
    c2: true,
  },
};

console.log(collectStrings(inputObjOne)); // Output: ['hello', 'world', 'foo', 'bar'

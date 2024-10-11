console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false) // false
console.log(validAnagram('awesome', 'awesom')); // false

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) return false;
  let lowerCaseStrOne = str1.replace(/\s+/g, '').toLowerCase();
  let lowerCaseStrTwo = str2.replace(/\s+/g, '').toLowerCase();
  //   //console.log(lowerCaseStrOne);
  /**
   * //conventional method:
   * return lowerCaseStrOne.split('').sort().join('') === lowerCaseStrTwo.split('').sort().join('');
   */
  /**
   * Frequency counter pattern
   */
  let frequencyCounterOne = {};
  let frequencyCounterTwo = {};
  for (let char of lowerCaseStrOne) {
    frequencyCounterOne[char] = (frequencyCounterOne[char] || 0) + 1;
  }
  for (let char of lowerCaseStrTwo) {
    frequencyCounterTwo[char] = (frequencyCounterTwo[char] || 0) + 1;
  }

  return areObjectsEqual(frequencyCounterOne, frequencyCounterTwo);
}

/**
 *
 * @param {object} obj1
 * @param {object} obj2
 * @returns {Boolean}
 */
function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if both objects have the same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if all keys and values are equal
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

/**
 * Another example
 */
function sameFrequency(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  let obj1 = {};
  let obj2 = {};
  //basecheck
  if (str1.length !== str2.length) return false;
  let lowerCaseStrOne = String(str1).replace(/\s+/g, '').toLowerCase();
  let lowerCaseStrTwo = String(str2).replace(/\s+/g, '').toLowerCase();
  for (let char of lowerCaseStrOne) {
    obj1[char] = (obj1[char] || 0) + 1;
  }
  for (let char of lowerCaseStrTwo) {
    obj2[char] = (obj2[char] || 0) + 1;
  }

  return areObjectsEqual(obj1, obj2);
}

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

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); //true

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

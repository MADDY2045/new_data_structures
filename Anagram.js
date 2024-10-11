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
 * AreThereany duplicates using freq counter
 * Approach
 * Initialise an obj to get hold of occurences of each chat from the args
 * loop thr the keys and check if any key has a value greater than one, if yes return true
 * else return false
 */
function areThereDuplicates(...args) {
  let obj = {};
  for (let val of args) {
    obj[val] = (obj[val] || 0) + 1;
  }

  for (let key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); //true

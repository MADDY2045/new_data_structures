/**
 * Hash tables
 */

/**
 * Big O
 * Insert:O(1)
 * Deletion:O(1)
 * Access:O(1)
 */
class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  /**
   *
   * @param {String} key
   * @returns {Number}
   */
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.toLowerCase().charCodeAt(0) - 96; //ASCI code to get alphabets range in smaller case
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  /**
   * SET
   * Accepts a key and a value
   * Hashes the key
   * Stores the key-valur pair in the hash table array
   * via seperate chaining
   */

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return this.keyMap;
  }

  /**
   * SET
   * Accepts a key
   * Hashes the key
   * Retrieves the key-value pair in the hash table
   * if not found, return undefined
   */
  get(key) {
    let hashIndex = this._hash(key);
    if (this.keyMap[hashIndex]) {
      for (let i = 0; i < this.keyMap[hashIndex].length; i++) {
        if (key === this.keyMap[hashIndex][i][0]) {
          return this.keyMap[hashIndex][i][1];
        }
      }
    }
    return undefined;
  }

  /**
   * Object.values mode
   */
  values() {
    let result = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          result.push(this.keyMap[i][j][1]);
        }
      }
    }
    return Array.from(new Set(result));
  }

  /**
   * Object.values mode
   */
  keys() {
    let result = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          result.push(this.keyMap[i][j][0]);
        }
      }
    }
    return result;
  }
}

console.clear();
console.log('*********** HASH CREARTION ********');
let newHash = new HashTable();

console.log('*********** SET ********');
console.log('hash now:', newHash.set('blue', 'BLUE'));
console.log('hash now:', newHash.set('orange', 'ORANGE'));
console.log('hash now:', newHash.set('cyan', 'CYAN'));
console.log('hash now:', newHash.set('green', 'GREEN'));
console.log('hash now:', newHash.set('test', 'TEST'));
console.log('hash now:', newHash.set('black', 'BLACK'));
console.log('hash now:', newHash.set('hello', 'HELLO'));
console.log('hash now:', newHash.set('helo', 'HELLO'));
console.log('hash now:', newHash.set('heo', 'HE'));
console.log('*********** GET ********');
let currentValue = newHash.get('cyan');
let currentValue2 = newHash.get('orange');
console.log('retrieved value:', currentValue);
console.log('retrieved value:', currentValue2);
console.log('*********** VALUES ********');
let result = newHash.values();
console.log('result:', result);
console.log('*********** KEYS ********');
let keys = newHash.keys();
console.log('keys:', keys);

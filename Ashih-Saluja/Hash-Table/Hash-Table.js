// HashTable

// store data in key value pair where key must be unique.

// for example:-

const person1 = {
  name: "Faroooq",
  houseNo: 273,
};

// console.log(person1.houseNo); // 274

const person2 = {
  name: "Ahmed",
  houseNo: 274,
};
// console.log(person2.houseNo); // 274

// hash function
// a special function that take key as an input and convert key into fixed size numerical value

let hashFunc = function (key, maxValue) {
  let hashCode = 0;
  for (let letter of key) {
    // console.log(letter.charCodeAt(0));
    hashCode += letter.charCodeAt(0);
  }
  return hashCode % maxValue;
};

// console.log(hashFunc("farooq", 40)); // 8
// console.log(hashFunc("qooraf", 40)); // 8

// there is no inbuilt support of hashtable in javascript
// we have to define our own custom class to implement hashtable functionality

// key operations

// set
// get

class useHashTable {
  maxSize = 50;
  constructor() {
    this.hashTable = new Array(this.maxSize);
  }

  hash(key) {
    let hashCode = 0;
    for (let letter of key) {
      hashCode += letter.charCodeAt(0);
    }
    return hashCode % this.maxSize;
  }

  set(key, value) {
    if (this.hashTable.length > this.maxSize) {
      return `Length of hash table must be ${this.maxSize}`;
    }
    const hashKey = this.hash(key);
    if (!this.hashTable[hashKey]) {
      this.hashTable[hashKey] = [];
    }
    this.hashTable[hashKey].push([key, value]);
  }

  get(key) {
    if (this.hashTable.length === 0) {
      return "Hashtable is empty!";
    }

    const hashKey = this.hash(key);
    let result = this.hashTable[hashKey];
    for (let pair of result) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return "No data found with this key!";
  }
}

const UseHashTable = new useHashTable();
console.log(UseHashTable.set("name", "farooq"));
console.log(UseHashTable.set("naem", "ahmed"));
console.log(UseHashTable.get("name"));

// usage of hashtable
// used for fast lookups, insertion and deletion

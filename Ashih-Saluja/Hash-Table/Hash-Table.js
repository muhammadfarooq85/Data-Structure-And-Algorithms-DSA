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
    const hashKey = this.hash(key);
    this.hashTable[hashKey].push([key, value]);
    console.log(this.hashTable);
  }
}

const UseHashTable = new useHashTable();
console.log(UseHashTable.set("name", "farooq"));

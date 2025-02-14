// set data structure
// it stores unique data
// javascript has inbuilt support for this data structure unlike hashtable data structure
// its data type is object

const mySet = new Set();
// console.log("type of set is", typeof mySet); // object

const duplicateNumbers = [1, 2, 2, 3, 5, 8, 7, 7, 6, 2];
const uniqueNumbers = new Set([...duplicateNumbers]); // { 1, 2, 3, 5, 8, 7, 6 }

// now convert into array
const uniqueNumbersArray = [...uniqueNumbers];
// console.log(uniqueNumbersArray);

// inbuilt methods like
// add, get, has, delete,
const setOfNumbers = new Set([1, 2, 3, 85, 796, 5, 4, 5, 563, 12]);
console.log("2 exist ", setOfNumbers.has(2) === true ? "Yes" : "No"); // true

console.log("8 exist ", setOfNumbers.has(8) === true ? "Yes" : "No"); // false

console.log("deleting 2");
setOfNumbers.delete(2);
console.log("2 exist ", setOfNumbers.has(2) === true ? "Yes" : "No"); // true

// clearing the set
// console.log("clearing set");
// setOfNumbers.clear();
// console.log("Set is cleared...");
// console.log(setOfNumbers);

// looping through the set using for of and forEach

console.log(
  setOfNumbers.forEach((value, index, oArray) =>
    console.log(value, index, oArray)
  )
);

for (let nums of setOfNumbers) {
  console.log("Nums of set are...", nums);
}

// union of two sets

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const unionOfAAndB = [...setA, ...setB];
console.log("union of A and B is...", unionOfAAndB);

// intersetion of two sets

const aSetInArray = [...setA];
const intersectionOfAAndB = aSetInArray.filter((x) => setB.has(x));
console.log("Intersection of two sets are...", intersectionOfAAndB);

// difference of two sets

const differenceOfAAndB = aSetInArray.filter((x) => !setB.has(x));
console.log(differenceOfAAndB);

console.log(setA.size === setB.size);

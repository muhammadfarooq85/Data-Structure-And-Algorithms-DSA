// Recusrsion

// The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function.

// Sum up of natural numbers from 1 to 5

// Itterative approach
let sum = 0;
for (let index = 1; index < 6; index++) {
  sum = sum + index;
}
console.log(sum);

// Recursive approach
function recursive1(n) {
  if (n === 1) {
    return 1;
  }
  let sum = 0;
  next = recursive1(n - 1);
  return sum + next;
}
console.log(recursive1(5));

// Implementation of binary seacrh via recurrsion
let binarySearch = (arr, target, start, end) => {
  if (start > end) {
    return "Element Not Found";
  }

  let mid = Math.floor((start + end) / 2);
  if (target === arr[mid]) {
    return "Element Found!";
  }

  if (target < mid) {
    return binarySearch(arr, target, start, mid - 1);
  }

  if (target > mid) {
    return binarySearch(arr, target, mid + 1, end);
  }
};

let arr = [1, 2, 47, 12];
let target = 47; // Element Found!
// let target = 50; // Element Not Found!

let start = 0;
let end = arr.length - 1;
console.log(binarySearch(arr, target, start, end));

// Find Factoirial
let calculateFactorial = (n) => {
  // Base Case:
  if (n === 1) {
    return 1;
  }
  // Recursive Case:
  return n * calculateFactorial(n - 1);
};
let n = 5;
console.log(calculateFactorial(n));

// Print natural mumber like in order 54321;
let printNaturalNumbersLike54321 = (n) => {
  // Base Case:
  if (n === 1) {
    return 1;
  };
  // Processing:
  console.log(n);
  // Recursive Case:
  return printNaturalNumbersLike54321(n - 1);
};

console.log(printNaturalNumbersLike54321(5)); // 54321

// Print numbers like in order 12345;
let printNaturalNumbersLike12345 = (n) => {
  // Base Case:
  if (n === 5) {
    return 5;
  };
  // Processing:
  console.log(n);
  // Recursive Case:
  return printNaturalNumbersLike12345(n + 1);
};

console.log(printNaturalNumbersLike12345(1)); // 12345

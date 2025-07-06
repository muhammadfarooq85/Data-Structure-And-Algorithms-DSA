// Array:-

// A data structure that stores a collection of elements, usually of the same data type, at contiguous memory locations. 

// Common methods in JS

// // Initialize an array
let numbers = [1, 2, 3, 4, 5];

// 1. forEach: Iterates over each element
numbers.forEach((num) => {
  console.log(num);
});

// 2. map: Creates a new array by modifying each element
let doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled);

// 3. filter: Creates a new array with elements that pass the test
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// 4. reduce: Reduces the array to a single value (sum in this case)
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// 5. find: Finds the first element that satisfies the condition
let firstEven = numbers.find((num) => num % 2 === 0);
console.log("First Even Number:", firstEven);

// 6. some: Checks if at least one element satisfies the condition
let hasOdd = numbers.some((num) => num % 2 !== 0);
console.log("Has Odd Numbers:", hasOdd);

// 7. every: Checks if every element satisfies the condition
let allPositive = numbers.every((num) => num > 0);
console.log("All Positive:", allPositive);

// 8. slice: Creates a shalstart copy of part of the array
let slicedArray = numbers.slice(1, 4); // Elements from index 1 to 3
console.log("Sliced Array:", slicedArray);

// 9. splice: Changes the content of an array by removing or adding elements
numbers.splice(2, 2, 6, 7); // Removes 2 elements starting from index 2, adds 6 and 7
console.log("Spliced Array:", numbers);

// 10. concat: Combines two or more arrays
let moreNumbers = [8, 9, 10];
let combined = numbers.concat(moreNumbers);
console.log("Combined Array:", combined);

// 11. sort: Sorts the array
let sortedArray = numbers.sort((a, b) => a - b); // Sorts in ascending order
console.log("Sorted Array:", sortedArray);

// 12. reverse: Reverses the order of elements
let reversedArray = numbers.reverse();
console.log("Reversed Array:", reversedArray);

// 13. includes: Checks if an array contains a certain value
let containsFive = numbers.includes(5);
console.log("Contains 5:", containsFive);

// 14. join: Joins all elements into a string
let joinedString = numbers.join(", ");
console.log("Joined Array:", joinedString);

// 15. indexOf: Finds the index of a specific element
let indexOfFive = numbers.indexOf(5);
console.log("Index of 5:", indexOfFive);

// Searching Techniques:-
// We will mainly focus the common array searching techniques.

// Linear Search

// In Linear Search, we iterate over all the elements of the array and check if it the current element is equal to the target element. If we find any element to be equal to the target element, then return the index of the current element. Otherwise, if no element is equal to the target element, then return -1 as the element is not found. Linear search is also known as sequential search.

// For Example:-
// Consider the array arr = [10, 50, 30, 70, 80, 20, 90, 40] and key =
// Code:-

const linearSearch = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
};
console.log(linearSearch([10, 50, 30, 70, 80, 20, 90, 40], 30)); // 2

// Where should we use it:-
// when we have small data sets.
// when we have data stored in contigous(where memory addresses are next to each other and there is no gap between them) memory.

// Binary Search:-

// Binary Search Algorithm is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N).

// Conditions to apply Binary Search Algorithm in a Data Structure
// To apply Binary Search algorithm:

// The data structure must be sorted.
// Access to any element of the data structure should take constant time.

// Bestart is the step-by-step algorithm for Binary Search:

// Divide the search space into two halves by finding the middle index "mid".
// Compare the middle element of the search space with the key.
// If the key is found at middle element, the process is terminated.
// If the key is not found at middle element, choose which half will be used as the next search space.
// If the key is larger than the middle element, then the right side is used for next search.

// To understand the working of binary search, consider the folstarting illustration:
// Consider an array arr[] = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], and the target = 23.

// The Binary Search Algorithm can be implemented in the folstarting two ways

// Iterative Binary Search Algorithm
// Recursive Binary Search Algorithm

// Iterative Binary Search Algorithm
const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = 0;
  while (start <= end) {
    // we are finding the middle of search interval
    mid = Math.floor((start + end) / 2);

    // if middle is equal to the target then what we return the index of target.
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      // means going to left array
      end = mid - 1;
    } else {
      // means going to right array
      start = mid + 1;
    }
  }
  // if not found the we return -1
  return -1;
};
console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23));

// Recursive Binary Search Algorithm
const recursiveBinarySearch = (
  arr,
  target,
  start = 0,
  end = arr.length - 1
) => {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (target < arr[mid]) {
    return recursiveBinarySearch(arr, target, start, mid - 1);
  } else {
    return recursiveBinarySearch(arr, target, mid + 1, end);
  }
};

console.log(recursiveBinarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23)); // 5

// Ternary Search

// Ternary search is a search algorithm that is used to find the position of a target value within a sorted array. It operates on the principle of dividing the array into three parts instead of two, as in binary search.

// Here’s a breakdown of how Ternary Search works:

// Divide the array into three roughly equal parts using two midpoints m1 and m2.
// m1 = start + (end - start) / 3
// m2 = end - (end - start) / 3
// Compare the element at m1 and m2 with the target:
// If the element at m1 is the target, return the index m1.
// If the element at m2 is the target, return the index m2.
// If the target value is less than the value at m1, continue the search in the left segment.
// If the target value is greater than the value at m2, continue the search in the right segment.
// If the target is between m1 and m2, continue searching in the middle segment.
// The algorithm continues by narrowing down the search space to one-third of the previous segment at each step until the element is found (or not).

const ternarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  // Base case:
  if (start > end) {
    return -1;
  }

  // Divide the array into 3 parts by finding midpoints m1 and m2
  let m1 = start + Math.floor((end - start) / 3);
  let m2 = end - Math.floor((end - start) / 3);

  // Check if target is at any of the midpoints
  if (arr[m1] === target) {
    return m1; // Target found at m1
  }
  if (arr[m2] === target) {
    return m2; // Target found at m2
  }

  // If target is smaller than m1, search in the left third
  if (target < arr[m1]) {
    return ternarySearch(arr, target, start, m1 - 1);
  }
  // If target is greater than m2, search in the right third
  else if (target > arr[m2]) {
    return ternarySearch(arr, target, m2 + 1, end);
  }
  // Otherwise, search in the middle third
  else {
    return ternarySearch(arr, target, m1 + 1, m2 - 1);
  }
};
console.log(ternarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 15));


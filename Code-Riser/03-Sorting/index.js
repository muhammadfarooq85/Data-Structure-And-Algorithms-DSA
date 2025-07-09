// Sorting

// Sorting refers to ordering data in an increasing or decreasing manner.

// Why Sorting Algorithms are Important
// The sorting algorithm is important in Computer Science because it reduces the complexity of a problem. There is a wide range of applications for these algorithms, including searching algorithms, database algorithms, divide and conquer methods, and data structure algorithms.

// Types of Sorting Techniques
// There are various sorting algorithms are used in data structures. The following two types of sorting algorithms can be broadly classified:

// Comparison-based: We compare the elements in a comparison-based sorting algorithm)
// Non-comparison-based: We do not compare the elements in a non-comparison-based sorting algorithm)

// Some problems related to the sorting not included in roadmap

// Check if an Array is Sorted in Ascending means no-decreasing order

const isArraySortedInAscending = (arr) => {
  if (arr.length === 0 || arr.length === 1) {
    return true;
  }
  for (let index = 1; index < arr.length; index++) {
    if (arr[index - 1] > arr[index]) {
      return false;
    }
  }
  return true;
};
if (isArraySortedInAscending([10, 10, 20, 30, 490])) {
  console.log("Yes..."); // Yes...
} else {
  console.log("No...");
}

if (isArraySortedInAscending([10, 30, 20, 30, 490])) {
  console.log("Yes...");
} else {
  console.log("No..."); // No...
}

// Bubble Sort:-
// Bubble Sort is a simple algorithm used to sort a list of elements, like numbers or words, in either ascending or descending order. It's called bubble sort because it repeatedly "bubbles" the largest (or smallest) element to the correct position with each pass through the list, much like bubbles rising to the top of water.

// How does it work?

// 1) Compare adjacent elements in the list (e.g., the first two elements).
// 2) If the elements are in the wrong order (e.g., the first is greater than the second for ascending order), swap them.
// 3) Move to the next pair of adjacent elements and repeat the process.
// 4) After each pass through the list, the largest (or smallest) element will have "bubbled up" to its correct position.
// 5) Repeat the process until the list is sorted.

// Why use it?

// Bubble sort is simple to understand and implement.
// It's good for small datasets or learning about sorting algorithms. However, for larger datasets, there are more efficient algorithms like Merge Sort or Quick Sort.

// Bubble Sort Example:-
const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // we are stroing the greater element in temp and then swapping means we are keeping smaller element on the greater element position which is zero, and then on smaller element position one we are assiging greater elemnet means temp variable value which is greater
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(bubbleSort([29, 10, 14, 37, 13])); // [10, 13, 14, 29, 37]

// Selection Sort:-
// Selection Sort is a simple comparison-based sorting algorithm. It works by repeatedly selecting the smallest (or largest, depending on the order) element from the unsorted part of the list and swapping it with the first unsorted element.

// How Selection Sort Works:

// Start with the first element.
// Find the smallest element in the remaining unsorted portion of the array.
// Swap that smallest element with the first element of the unsorted portion.
// Move the boundary of the sorted portion to the right by one element.
// Repeat this process for all elements until the list is sorted.

// Selection Sort Example:-
function selectionSort(arr) {
  let n = arr.length;
  // Traverse upto the second last elements in the array. Because last element will be already sorted.
  for (let i = 0; i < n - 1; i++) {
    // assumiong that the current index is minimum
    let minIndex = i;
    // Finding the actual minimum element in the unsorted portion of the array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found minimum element with the first element of the unsorted portion
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
console.log(selectionSort([64, 25, 12, 22, 11])); // [ 11, 12, 22, 25, 64 ]

// Insertion Sort Algorithm:-
// Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is like sorting playing cards in your hands. You split the cards into two groups: the sorted cards and the unsorted cards. Then, you pick a card from the unsorted group and put it in the right place in the sorted group.

// How it works:-

// We start with the second element of the array as the first element is assumed to be sorted.
// Compare the second element with the first element if the second element is smaller then swap them.
// Move to the third element, compare it with the first two elements, and put it in its correct position
// Repeat until the entire array is sorted.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // current element
    let key = arr[i];
    // previous ones
    let j = i - 1;
    // we are comparing if any previous is greator if greater then swap them
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    // if nothing happens then array elements remain at their positions
    arr[j + 1] = key;
  }
}
console.log(insertionSort([12, 11, 13, 5, 6])); // [ 5, 6, 11, 12, 13 ]

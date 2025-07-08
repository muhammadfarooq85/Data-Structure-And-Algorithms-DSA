// 02. Two Sum

// We will use linear search algorithm.

let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]

// 238. Product of Array Except Self
const productExceptSelf = function (nums) {
  const n = nums.length;
  const left = new Array(n);
  const right = new Array(n);
  const result = new Array(n);

  // Initialize the left array
  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  // Initialize the right array
  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  // Multiply the left and right arrays to get the result
  for (let i = 0; i < n; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
};
console.log(productExceptSelf([1, 2, 3, 4]));

// Kadane's Algorithms
const printSubArray = (arr) => {
  // start index
  for (let i = 0; i < arr.length; i++) {
    // end index
    for (let j = i; j < arr.length; j++) {
      // innrermost index
      let subArray = [];
      for (let k = i; k <= j; k++) {
        subArray.push(arr[k]);
      }
      console.log(subArray);
    }
  }
  return "";
};
console.log(printSubArray([1, 2, 3, 4]));

// 121. Best time to sell and buy stock
function maxSubarraySum(arr) {
  let minBuyPrice = arr[0];
  let profit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minBuyPrice) {
      minBuyPrice = arr[i];
    } else {
      let currentProfit = arr[i] - minBuyPrice;
      profit = Math.max(profit, currentProfit);
    }
  }
  return profit;
}
console.log(maxSubarraySum([2, 3, -8, 7, -1, 2, 3])); // 11

// 42. Trapping Rain Water
const findTrapWater = (height) => {
  const n = height.length;
    let left = Array(n);
    let right = Array(n);
    let res = 0;
    left[0] = height[0];
    for (let i = 1; i < n; i++) {
        left[i] = Math.max(left[i - 1], height[i]);
    }
    right[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], height[i]);
    }
    for (let i = 1; i < n - 1; i++) {
        let minOf2 = Math.min(left[i], right[i]);
        res += minOf2 - height[i];
    }
    return res;
};
console.log(findTrapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2])); // 6

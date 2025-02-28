# solved two leetcode problem
# 905. Sort Array By Parity

class Solution:
    def sortArrayByParity(nums):
        evenNums = []
        oddNums = []
        for num in nums:
            if num % 2 == 0:
                 evenNums.append(num)
            else:
                 oddNums.append(num)
        return evenNums + oddNums

print(Solution.sortArrayByParity([3,1,2,4])) # [ 2, 4, 3, 1 ]

# 744. Find Smallest Letter Greater Than Target

class Solution1:
    def nextGreatestLetter(letters, target):
        for letter in letters:
          if letter <= target:
              return letter
        return letters[0]
            
print(Solution1.nextGreatestLetter(["c", "f", "j"],"a")) # c

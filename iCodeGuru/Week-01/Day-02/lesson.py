# Time complexity
# the amount of time takes for each statement to complete

# Sapce complexity
# the amount of space an algorithm uses for an operation

# Big O --- Worst Case
# describes maximum amount of time or space an algorithm uses 

# Big Theta 0 --- Average Case
# describes average amount of time or space an algorithm uses 

# Big Omega Ω --- best Case
# describes minimum amount of time or space an algorithm uses

# Stats

# Excellent
# O(log n), O(1)

# Good
# O(n)

# Fair
# O(n log n)

# bad
# O(n^2)

# bad
# O(2^n)

# bad
# O(n!)

# constants time complexity

# O(1)
lis = [1,2,3]
x = lis[0]
print(x)

# for loop in sepcific range
# O(1)
for i in range(1, 11):
    print(i)
    
# conditional chk for if
# O(1)

a= 3
if a > 2:
    print("True")

# conditional chk for else
# O(1)
if a < 2:
    print("True")
else:
    print("False")
    

arr = ["Farooq","Ahmed","Ahad" ]
for i in range(len(arr)):
    print(arr[i])   
    
    
    
# Two Sum LeetCode

# input
nums = [2,7,11,15]
target = 9

# output
# [0,1]

class Solution:
    def twoSum(n,t):
        numsLength= len(nums) # O (1)
        for i in range(numsLength):
            for j in range(numsLength + 1):
                if nums[i] + nums[j] ==t:
                    return [nums[i],nums[j]]


print(Solution.twoSum(nums, target))

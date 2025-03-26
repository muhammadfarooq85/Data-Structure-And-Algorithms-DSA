# 881. Boats to saev people
class solution:
    def numRescueBoats(people, limit):
        people.sort()
        boat = 0
        left = 0
        right = len(people) - 1
        for i in range(0, len(people)):
            if(people[left] + people[right] <= limit):
                left +=1
            right -= 1
            boat += 1
        return boat

print(solution.numRescueBoats([1, 2], 3))

# 258. Add Digits
class Solution1:
    def addDigits(num):
        if num == 0:
            return 0
        elif num % 9 == 0:
            return 9
        else:
            return num % 9

print(Solution1.addDigits(976)) # 976 => 9 + 7 + 6 => 22 => 2 + 2 => Ans. 4

# find the difference of array

class Solution2:
    def findDifference(nums1, nums2):
        set1 = set(nums1) - set(nums2)
        set2 = set(nums2) - set(nums1)
        li = [list(set1) , list(set2)]
        return li

print(Solution2.findDifference([1, 2, 3], [2, 4, 6]))

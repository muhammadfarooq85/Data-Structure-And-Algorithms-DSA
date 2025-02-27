# leetocode problem #217. Contains Duplicate

class Solution:
    def isDuplicates (nums):
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if(nums[i] == nums[j]):
                    return True
        return False
        


numss = [1,2,3,1]
print(Solution.isDuplicates(numss))
 
# leetocode problem #412. Fizz Buzz

class Solution1:
    @staticmethod
    def printFizzBuzz(n):
        result = []
        for i in range(1, n + 1):
            if i % 3 == 0 and i % 5 == 0:
                result.append("FizzBuzz")
            elif i % 3 == 0:
                result.append("Fizz")
            elif i % 5 == 0:
                result.append("Buzz")
            else:
                result.append(i)
        return result
    
print(Solution1.printFizzBuzz(15))

# 2185. Counting Words With a Given Prefix:- In JavaScript

# var prefixCount = function(words, pref) {
#     let result = 0;
#     for(let i = 0; i < words.length; i++ ){
#         if(words[i].startsWith(pref)){
#             result +=1;
#         }
#     }
#     return result;
# };
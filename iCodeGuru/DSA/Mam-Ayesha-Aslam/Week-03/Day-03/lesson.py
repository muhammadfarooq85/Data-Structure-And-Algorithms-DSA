# successfully solved three leetcode problems

# 268. Missing Number

# 387. First Unique Character in a String

# 49. Group Anagrams

class Solution:
    def groupAnagrams(strs):
        dic = {}
        for i in range(0, len(strs)):
            sort = "".join(sorted(strs[i]))
            if sort not in dic:
                dic[sort] = []
            dic[sort].append(strs[i])
        finalStringOfArray = []
        for key, value in dic.items():
            finalStringOfArray.append(value)
        return finalStringOfArray


print(Solution.groupAnagrams(["eat","tea","tan","ate","nat","bat"])) # [["bat"],["nat","tan"],["ate","eat","tea"]]

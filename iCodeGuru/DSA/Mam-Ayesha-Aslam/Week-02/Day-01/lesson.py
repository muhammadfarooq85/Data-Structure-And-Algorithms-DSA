# i successfully presented a leetcode problem.

# https://fb.watch/y5f_a8F7ki/

# 2185. Counting Words With a Given Prefix

class Solution:
    def prefixCount(words, pref):
        counter = 0
        for word in range(0, len(words)):
            if words[word].startswith(pref):
                counter += 1
        return counter
        
print(Solution.prefixCount(["pay","attention","practice","attend"], "at")) # 2
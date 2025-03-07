# 1758. Minimum Changes To Make Alternating Binary String
# 2351. first letter appear twice


class Solution:
    def minOperations (s):
        counter = 0
        for i in range(0, len(s)):
            if i % 2 == 0:
                if s[i] == "0":
                    counter += 1
            elif i % 2 != 0:
                if s[i] == "1":
                    counter += 1
        return min(counter, len(s)  - counter )

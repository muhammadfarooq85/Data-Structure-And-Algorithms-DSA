# 13. Roman to Integer

class Solution(object):
        def romanToInt(self, s):
            dic={"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
            sum=dic[s[-1]]
            for i in range(len(s)-1,0,-1):
                if dic[s[i-1]]< dic[s[i]]:
                    sum= sum - dic[s[i-1]]
                else:
                    sum+=dic[s[i-1]]
            return sum

print(Solution.romanToInt("MCMXCIV")) # 1994
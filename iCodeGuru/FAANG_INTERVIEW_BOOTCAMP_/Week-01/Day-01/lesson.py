# 739. Daily Temprature

class Solution:
    def dailyTempratures(T):
        stack = []
        r = [0] * len(T)
        for t in range(0, len(T)):
            while stack and T[t] >  T[stack[-1]]:
                index = stack.pop()
                r[index] = t - index 
            stack.append(t)
        return r

print(Solution.dailyTempratures([73,74,75,71,69,72,76,73])) # [1,1,4,2,1,1,0,0]
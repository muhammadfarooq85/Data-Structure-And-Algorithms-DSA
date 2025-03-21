# 122. Best time to buy and sell stock II

class Solution:
    def maxProfit(prices):
        maxProfit = 0
        for price in range(1, len(prices)):
            if prices[price] > prices[price - 1]:
                maxProfit += prices[price] - prices[price - 1]
        return maxProfit

print(Solution.maxProfit([7, 1, 5, 3, 6, 4])) # 7


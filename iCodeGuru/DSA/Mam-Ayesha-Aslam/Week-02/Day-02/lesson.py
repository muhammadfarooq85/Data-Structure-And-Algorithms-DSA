# i presented a leetcode problem # 58. Length of Last Word

# today, class discussion was about string.

class Solution:
    def lengthOfLastWord (s):
        trimmedString = s.strip()
        trimmedString = trimmedString.split(" ")
        return len(trimmedString[-1])
    
print(Solution.lengthOfLastWord("Hello World")) # 5

# 709. To Lower Case

class Solution1:
    def toLowerCase (s):
        return s.lower()
    
print(Solution1.toLowerCase("Hello")) # hello

# 2810. Faulty Keyboard

class Solution2:
    def finalString(s):
        finalString = []
        for keyBoardChar in range(0, len(s)):
            if s[keyBoardChar] == "i": 
                finalString.reverse()
            else:
                finalString.append(s[keyBoardChar]) 
        
        return "".join(finalString)

print(Solution2.finalString("poiinter"))

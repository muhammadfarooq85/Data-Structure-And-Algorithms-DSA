# 1768. Merge Strings Alternately

class Solution:
    def mergeAlternately(word1, word2):
        merged_string = []
        i,j = 0,0
        while i < len(word1) and j < len(word2):
            merged_string.append(word1[i])
            merged_string.append(word2[j])
            i += 1
            j += 1
        
        if i != len(word1):
            merged_string.append(word1[i:])
        if j != len(word2):
            merged_string.append(word2[j:])
            
        return ''.join(merged_string)
    
print(Solution.mergeAlternately("abc", "def"))  # adbecf
# leetcode problem

class Solution:
    def removeDuplicates(str):
        stack = []
        for letter in str:
            if(stack and letter == "*"):
                stack.pop()
            else:
                stack.append(letter)
        return "".join(stack)
    
# some issue in this python code but is understand the logic and did succesfully in javascript
class anotherSolution:
    def calPoint(operations):
        record = []
        for opt in operations:
            if record and opt == "+":
                record.append(int(record[-1]) + int(record[-2]))
            elif record and opt == "C":
                record.pop(record[-1])
            elif record and opt == "D":
                record.append(int(record[-1]) * 2)
            else:
                record.append(int(opt))
        return sum(record)
                
print(Solution.removeDuplicates("leet**cod*e"))
print(Solution.removeDuplicates("erase*****"))

print(anotherSolution.calPoint(["5","2","C","D","+"]))
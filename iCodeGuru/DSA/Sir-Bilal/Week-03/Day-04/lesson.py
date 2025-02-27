# leetcode problem

# 1700:- find number of students that are unable to eat

class Solution:
    def findStudents(stu:list[int], sand:list[int]):
        count = 0
        while len(stu) != 0:
            if stu[0] == sand[0]:
                stu.pop(0) 
                sand.pop(0)
                count = 0
            else:
                count = count +  1
                stu.append(stu.pop(0))
            if count == len(stu):
                return count
        return 0

print(Solution.findStudents([1,1,0,0],[0,1,0,1])) # 0
print(Solution.findStudents([1,1,1,0,0,1],[1,0,0,0,1,1]))  # 3
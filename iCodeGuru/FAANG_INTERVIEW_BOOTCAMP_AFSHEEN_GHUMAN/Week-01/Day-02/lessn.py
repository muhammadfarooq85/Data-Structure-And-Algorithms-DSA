# 832. Flipping an Image

class Solution:
    def flipAndInvertImage(image):
        for i in range(0, len(image)):
            image[i].reverse()
            for j in range(0,len(image)):
                if image[i][j] == 1:
                    image[i][j] = 0
                elif image[i][j] == 0:
                    image[i][j] = 1
        return image

print(Solution
.flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])) # [[1,0,0],[0,1,0],[1,1,1]]

# 2331. Evaluate Boolean Binary Tree

class Solution1:
    def evaluateTree(root):
        if root.val == 1: return true
    if root.val == 0: return false
    left = evaluateTree(root.left)
    right = evaluateTree(root.right)
    if root.val == 3:
        return left and right
    elif root.val == 2:
        return left or right
    return false


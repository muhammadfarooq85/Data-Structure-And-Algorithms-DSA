// Remeber some things before starting:

// Binary Search Tree
// Have alleast two nodes (left and right)
// Left node is less than the parent node
// Right node is greater than the parent node

// Avl Tree
// Is a self balancing binary search tree

// Why slef balancing is important?
// Because it keeps the height of the tree as low as possible, which makes searching for a node faster

// How to balance a avl tree?
// balance factor = height of left subtree - height of right subtree
// balance factor must be -1, 0, 1
// other balance factor denotes the tree is unbalanced

// height of a node = max(height of left subtree, height of right subtree) + 1

// Avl Tree Implementation

// JavaScript has no inbuilt solution for this
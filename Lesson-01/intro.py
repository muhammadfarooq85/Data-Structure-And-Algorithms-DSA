# What is Data Structure And Algorithms ( DSA )?
# Data Structure refers to the way in which data is store and organized in a computer, allowing efficient access and modification. Algorithm are a set of well defined procedure used to solve a problem.

# Common types of data structure:-
# Array
# String
# Dictionary
# Linked list
# Tree
# Graph

# Common Algorithms:-
# Brute force
# Two pointers
# Recursion
# Sorting
# Greedy
# Divide and conquer
# Bactracking

# Time Complexity:-
# The Amount of time it takes for each statement to complete. It varies from system to system.

# Space Complexity:-
# Indicates how much space or memory an algorithm uses depending on imput. Long input large space.

# Best Case
# describe the minimum amount of time and space algoritms uses.

# Average case
# describe the exact amount of time and space algorithm uses.

# Worst Case
# describes maximum time and space an algoritm uses.

# Array
# Array is a collection of elements of the same type.
# Stored in adjacent (near) memory.
# For example employees in a company.
# Must be of same data type

# Array capacity
# Maximum number of an array that can holds.

# Array length
# Current number of items in an array.

# Capacity of an array = 5

# Arr = [1,2,3]
# Length of an array = 3


# arr = ["Farooq", "Ahmed", 1]

# print(arr)

# Array operator

# insertion 

# n ====> number of elements in an array 

# inserting an element at the end of an array
# time complexity O(1)
# best case


# inserting in the middle
# time complexity O(n)
# average case

# inserting array at the start of an array
# time complexity O(n)
# worst case

# deletion

# deletion at the end of an array
# time complexity O(1)
# best case

# deletion in the middle of an array
# time complexity O(n)
# average case  

# deletion at the start of an array
# time complexity O(n) 
# worst 

# search
# to find out an element in an entire array of numbers such as 4 to find. 
# numbers = [1,2,3,4]
# it have to itterate 4 steps to find out the given element
# time complexity O(n)


# arr = [1,2,52, "a"]
# print(arr) # list

# creating an array
import array as arr 
array1 = arr.array('i', [1,2,3,4])

# type chk via type
print(type(array1))

# length chk via len
print(len(array1))

# append or insert value at the end of array
# best case 
array1.append(2)
print(array1) # array('i', [1, 2, 3, 4, 2])

# accessing at the start
# best case
# time complexity O(1)
print(array1[3]) 

# inserting at the start of the array
# worst case O(n)
array1.insert(0, 0) 
print(array1)  # array('i', [0, 1 , 2, 3, 4, 2])

# inserting at the middle
array1.insert(3, 44)
print(array1) # array('i', [0, 1 , 2, 44, 3 , 4, 2])

# deleting at the end
array1.pop()
# array1.pop(0)  we can also specify the index
print(array1)  # array('i', [0, 1 , 2, 44, 3 , 4])
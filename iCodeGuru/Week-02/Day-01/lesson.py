# String
# strinf is a squence of characters
# in string we can store letters, numbers and charaters
# every chars in the string has indexing
# left to right (0) and right to left (-1)

str1 = "Hello" # Hello
str2 = 'Hello' # Hello
str3 = '''Hello''' # Hello
str4 = """Hello""" # Hello
str4 = "Hello I'm Farooq" # Hello I'm Farooq
str5 = 'Hello I"m Farooq' # Hello I"m Farooq

print(str1, str2, str3, str4,str5)
print(str1[0]) # H 


# string concatenation
str6 = "m"
str7 = "Farooq"
print(str6 + " " + str7) # m Farooq

# repetaing string

str8 = "Farooq"
print(str8 * 3) # FarooqFarooq

# length of string
str9 = "Farooq"
print(len(str9)) # 6

# slicing
str10 = "Muhammad Farooq"
print(str10[0:8]) # Muhammad
print(str10[:8]) # Muhammad
print(str10[8:]) #  Farooq



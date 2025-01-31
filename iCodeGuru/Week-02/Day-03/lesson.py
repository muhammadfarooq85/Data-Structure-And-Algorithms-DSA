# dictionary 

# basic syntax

dic = {
    "name":"Farooq",
    "className":"10th"
}

print(dict)
print(type(dict)) # dict

# accessing data

print(dic["name"]) # Farooq
print(dic.get("name")) # Farooq

# modifying data

dic["className"] = "11th"
print(dic["className"]) # 11th

# deleting data
del dic["className"]
print(dic["className"]) # error becauese this key is deleted


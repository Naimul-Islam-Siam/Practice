name = input("What is your name?") #scanf
print("My name is " + name)
print(bin(5)) #binary of 5
print(int("0b101", 2)) #first argument is a base 2 number, convert it to an int
print(2 ** 3) #same as 2^3
a,b,c = 1,2,3
print(a) #1
print(b) #2
print(c) #3

# long string ''' allows string to occupy multiple lines
long_string = '''
WOW
O O
---
'''
print(long_string)

#Escape Sequence
print("It\'s \"kind of\" funny")
# \t = tab
# \n = new line


#Formatted String
age = 55
name = "Johnny"
print(f"{name} is {age} years old.") #f must be included
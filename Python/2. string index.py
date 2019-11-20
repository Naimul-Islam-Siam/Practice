#string index

selfish = "me me me"
print(selfish[0]) #will print m

number = "876543210"

print(number[-2]) #1 
#reverse number then give the 2nd item

print(number[0:3]) #output: 876
#start:stop || start at 0 end at 3 

print(number[0:9:2]) #output: 86420
#start:stop:stepover || by default stepover = 1, stepover means skipping

print(number[0:]) # 876543210
# by default from start to end

print(number[:5]) # 87654
# by default from start to 5

print(number[::-1]) # 012345678
# reverse order

print(number[::-2]) # 02468
# turn reverse and skip/stepover 2
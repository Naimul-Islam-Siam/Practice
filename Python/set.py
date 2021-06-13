my_set = {1,2,3,4,5}
your_set = {4,5,6,7,8,9}

print(my_set.difference(your_set)) # {1,2,3}
print(your_set.difference(my_set)) # {6,7,8,9}
print(my_set.intersection(your_set)) # {4,5}
print(my_set.union(your_set)) # {1,2,3,4,5,6,7,8,9}
print(my_set.isdisjoint(your_set)) # False
print(my_set.issuperset(your_set)) # False
print(my_set.issubset(your_set)) # False
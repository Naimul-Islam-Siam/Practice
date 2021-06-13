my_list = [1, 2, 3]
my_list2 = [3, 4, 5]
my_list3 = [6, 7, 8, 9]
my_list4 = [6, 7]

print(list(zip(my_list, my_list2, my_list3))) # [(1, 3, 6), (2, 4, 7), (3, 5, 8)]
print(list(zip(my_list, my_list2, my_list4))) # [(1, 3, 6), (2, 4, 7)]
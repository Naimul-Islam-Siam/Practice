# ====================
## List Comprehensions
# ====================
my_list = [char for char in 'Hello']
my_num = [num for num in range(0, 6)]
my_num_even = [num for num in range(0, 20) if num %2 == 0]

print(my_list) # ['H', 'e', 'l', 'l', 'o']
print(my_num) # [0, 1, 2, 3, 4, 5]
print(my_num_even) # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]


# ===================
## Set Comprehensions
# ===================
my_set = {char for char in 'Hello'}
my_set_num = {num for num in range(0, 6)}

print(my_set) # {'H', 'e', 'l', 'l', 'o'}
print(my_set_num) # {0, 1, 2, 3, 4, 5}
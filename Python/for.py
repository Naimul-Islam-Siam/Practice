numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
is_even = False

for i in range(len(numbers)):
    if numbers[i] % 2 == 0:
        is_even = True
    else:
        is_even = False

    print(f'{i}-is_even: {is_even}')

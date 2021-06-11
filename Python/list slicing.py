amazon_cart = ["Hair Wax", "Book", "Mug", "Laptop", "Watch"]

# Assigning with slicing.So, this will create a copy of amazon cart and save in new_cart
new_cart = amazon_cart[:]

print(f'Amazon Cart: {amazon_cart}')
print(f'New Cart: {new_cart}')

## Output:
## Amazon Cart: ["Hair Wax", "Book", "Mug", "Laptop", "Watch"]
## New Cart: ["Hair Wax", "Book", "Mug", "Laptop", "Watch"]

new_cart[0] = "Shoe"
new_cart[3] = "Guitar"

print(f'Amazon Cart: {amazon_cart}')
print(f'New Cart: {new_cart}')

## Output:
## Amazon Cart: ["Hair Wax", "Book", "Mug", "Laptop", "Watch"]
## New Cart: ["Shoe", "Book", "Mug", "Guitar", "Watch"]


# Assigning without slicing. So both arrays will point to same address in memory
# Now changing either of them will change both of them
new_cart = amazon_cart

new_cart[0] = "Mask"

print(f'Amazon Cart: {amazon_cart}')
print(f'New Cart: {new_cart}')

## Output:
## Amazon Cart: ["Mask", "Book", "Mug", "Laptop", "Watch"]
## New Cart: ["Mask", "Book", "Mug", "Laptop", "Watch"]
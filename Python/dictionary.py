user = {
   'country': 'uk',
   'package': 'standard',
   'age': 22
}

print(user.get('age', 55)) # 22 . As a key named 'age' exists in user dictionary, it will use the default value

user = {
   'country': 'uk',
   'package': 'standard'
}

print(user.get('age', 55)) # 55 . As a key named 'age' doesn't exist in user dictionary, it will use the value later assigned

user2 = user.copy()

print(user.clear()) # None
print(user2) # {'country': 'uk', 'package': 'standard'}

user2.update({'country': 'esp'})

print(user2) # {'country': 'esp', 'package': 'standard'}

for key in user.keys():
   print(key)

for value in user.values():
   print(value)

for key, value in user.items():
   print(key, value)
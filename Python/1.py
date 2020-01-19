secret_word = "giraffe"
guess_word = ""
guess_count = 0
limit_of_guesses = 3
out_of_guesses = False

while guess_word != secret_word and out_of_guesses != True:
  if guess_count < limit_of_guesses:
    guess_word = input("Enter Guess: ")
    guess_count += 1
  else:
    out_of_guesses = True

if out_of_guesses:
  print("Out of guesses")
else:
  print("Well done")
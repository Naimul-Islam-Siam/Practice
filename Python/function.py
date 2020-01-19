def pow(number, power):
    result = 1
    for i in range(power):
        result = result * number
    return result


def translate(phrase):
    converted_phrase = ""
    for letter in phrase:
        if letter.lower() in "aeiou":
            if letter.isupper():
                converted_phrase = converted_phrase + "G"
            else:
                converted_phrase = converted_phrase + "g"
        else:
            converted_phrase = converted_phrase + letter

    return converted_phrase


print(translate(input("Enter a phrase: ")))

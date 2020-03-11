from translate import Translator

translator = Translator(to_lang="ja")

try:
    with open('./files/text.txt', mode='r') as input_file:
        text = input_file.read()
        translation = translator.translate(text)

        print(translation)

except FileNotFoundError as e:
    print("File not found!")

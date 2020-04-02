import csv
import math

input_file = csv.DictReader(open("./dataset/Buy_Computer.csv"))
data_arr = []
actual = []
predicted = []
confusion = []


for row in input_file:
    data_arr.append(row)

# print(data_arr)


for i in range(len(data_arr)):
    actual.append(data_arr[i]['Buy_Computer'])

print(actual)


true_positive = 0
true_negative = 0
false_positive = 0
false_negative = 0


for i in range(len(actual)):
    if(actual[i] == 0 and predicted[i] == 0):
        true_negative = true_negative + 1
    if(actual[i] == 1 and predicted[i] == 1):
        true_positive = true_positive + 1
    if(actual[i] == 0 and predicted[i] == 1):
        false_positive = false_positive + 1
    if(actual[i] == 1 and predicted[i] == 0):
        false_negative = false_negative + 1

confusion = [true_positive, false_negative, false_positive, true_negative]

accuracy = (true_positive+true_negative) / (true_positive +
                                            true_negative+false_positive+false_negative)
recall = true_positive / (true_positive + false_negative)
specificity = true_negative / (true_negative+false_positive)
precision = true_positive / (true_positive+false_positive)

# print(f'Accuracy: {accuracy}, Recall: {recall}, Specificity: {specificity}, Precision: {precision}')

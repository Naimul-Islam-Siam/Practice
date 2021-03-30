const carMakers: string[] = ["Toyota", "BMW", "FORD", "Aston Martin"];

// multiple types
const importantDates: (string | Date)[] = [new Date(), '30-03-2021'];

// tuples
// [string, boolean, number] means the elements of the tuple must in exact order of string, boolean, number
const cocacola: [string, boolean, number] = ['brown', true, 40];
const frutica: [string, boolean, number] = ['yellow', false, 50];

// 1. Tuple is useful for csv files
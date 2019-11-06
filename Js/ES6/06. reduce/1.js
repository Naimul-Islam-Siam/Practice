const numbers = [2, 4, 6, 8, 10];

// for loop implementation
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}



// reduce helper implementation
numbers.reduce((sum, number) => {
    return sum + number; // number is similar to numbers[i]
}, 0); // 0 is the value of the 2nd argument which is 'sum' here, arrow function is the first one

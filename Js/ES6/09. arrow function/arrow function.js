//ES5
var double = function (number) {
    return number * 2;
}

//ES6
const doubleNew = (number) => {
    return number *2;
}

const divideNew = (number1, number2) => {
    return number1 / number2;
}

console.log(double(2));
console.log(double(4));
console.log(divideNew(8,2));

//ES5
var print = function() {
    console.log("ES5 way of writing function with no argument");
}

//ES6
const printNew = () => {
    console.log(`ES6 way of writing function with no argument`);
}

print();
printNew();

const numbers = [2, 4, 6];

const arrDouble = numbers.map((num) => {
    return num*2;
});

console.log(arrDouble);
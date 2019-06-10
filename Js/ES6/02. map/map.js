var numbers = [2, 4, 6];
var doubledNumbers = [];

//using for loop
for (var i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);

console.log("-------------");

//using map
var doubledNumbers2 = numbers.map(function (number) {
    return number * 2;
});

console.log(doubledNumbers2);

console.log("-------------");

var cars = [
    {
        name: "Tata",
        price: "Cheap"
    },

    {
        name: "Lamborghini",
        price: "Expensive"
    }
];

var prices = cars.map(function (car) {
    return car.price;
});

console.log(prices);
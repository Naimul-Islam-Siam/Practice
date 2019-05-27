//for typical function expressions
var greeting = function (name) {
    return "Hello " + name;
}("Siam");

console.log(greeting);

var firstname = "Casillas";

//for anonymous functions
(function (name) {
    console.log("Hola " + name);
}(firstname));


//intentionally affecting the global object
var carName = "Audi";

//not affecting
(function (carName) {
    console.log(carName + " runs very fast.");
}("Lamborghini"));

console.log(carName); //output will be "Audi" as it's the current value of carName global object

//affecting
(function (global, carName) {
    global.carName = "BMW"; //mutating the global object intentionally
    console.log(carName + " runs very fast.");
}(window, "Lamborghini"));

console.log(carName); //now output won't be "Audi", it'll be "BMW" cause we mutated the global object intentionally inside IIFE
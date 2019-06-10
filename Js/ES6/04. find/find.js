var names = ["Rooney", "Tevez", "Ronaldo", "Giggs", "Beckham"];

var storeName;

//for loop
for (var i = 0; i < names.length; i++) {
    if (names[i] === "Ronaldo") {
        storeName = names[i];
        break;
    }
}

console.log("Stored : " + storeName);

//find helper
var foundName = names.find(function (name) {
    return name === "Tevez";
});

console.log("Found : " + foundName);

function Car(name, color) {
    this.name = name;
    this.color = color;
}

var cars = [
    new Car("Audi", "white"),
    new Car("Lamborghini", "black"),
    new Car("Mercedes", "silver"),
];

var foundCar = cars.find(function (x) {
    return x.color = "white";
});

console.log(foundCar);
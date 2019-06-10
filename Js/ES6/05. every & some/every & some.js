var computers = [
    {
        brand: "Apple",
        ram: 24
    },

    {
        brand: "Acer",
        ram: 12
    },

    {
        brand: "Dell",
        ram: 20
    },

    {
        brand: "Asus",
        ram: 16
    },

    {
        brand: "Lenovo",
        ram: 8
    }
];

var everyComputerCan;
var someComputerCan;

//using for loop
for (var i = 0; i < computers.length; i++) {
    if (computers[i].ram < 16) {
        everyComputerCan = false;
    } else {
        someComputerCan = true;
    }
}

console.log(everyComputerCan);
console.log(someComputerCan);

console.log("---------");

//using "every" and "some" helper
var every = computers.every(function (computer) {
    return computer.ram > 16;
});

var some = computers.some(function (computer) {
    return computer.ram > 16;
});

console.log(every);
console.log(some);

console.log("---------");

var names = [
    "Matthew",
    "Buttler",
    "Root",
    "Morgan"
];

var everyName = names.every(function (name) {
    return name.length > 4;
});

var someName = names.some(function (name) {
    return name.length > 4;
});

console.log(everyName);
console.log(someName);
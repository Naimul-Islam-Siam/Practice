//Function Constructor
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function () {
    return "Hi " + this.firstname + " " + this.lastname;
}

var john = new Person("John", "Doe");

console.log(john);
console.log(john.greet());


//Object.create
var car = {
    name: "Default",
    country: "Default",
    details: function () {
        return this.name + " is manufactured in " + this.country;
    }
}

var BMW = Object.create(car);
BMW.name = "BMW";
BMW.country = "Germany";

console.log(BMW);
console.log(BMW.details());
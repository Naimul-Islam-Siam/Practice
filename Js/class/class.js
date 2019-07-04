//ES5

var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john = new Person5("John", 1990, "Teacher");
console.log(john);

//ES6

class Person {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
};

const morgan = new Person("Morgan", 1987, "Cricketer");
console.log(morgan);

//classes don't support hoisting unlike function constructors
//properties can't be inherited by classes only methods can be inherited
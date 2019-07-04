//ES5

var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    return age;
}

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job); //inherit from Person5
    this.olympicGames = olympicGames;
    this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype); //inherit

Athlete5.prototype.wonMedal = function () {
    this.medals++;
    return this.medals;
};

var phelps = new Athlete5("Phelps", 1984, "Swimmer", 10, 8);

phelps.wonMedal();
console.log(phelps.calculateAge());
console.log(phelps);


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

class Athlete extends Person {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job); //inherit from super class instead of using <super class name>.call()
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        return this.medals;
    }
}

const neymar = new Athlete("Neymar", 1992, "Footballer", 2, 1);

neymar.wonMedal();
neymar.calculateAge();
console.log(neymar);

//Athlete is the sub class and Person is the super class
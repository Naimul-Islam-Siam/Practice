//Normal Object
var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'Teacher'
};

//Function Constructor
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	// this.calculateAge = function() {
	// 	console.log(2016 - this.yearOfBirth);
	// }
}

Person.prototype.calculateAge = function() {
		console.log(2016 - this.yearOfBirth);
	};
Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'Teacher'); //instanciation
var jane = new Person('Jane', 1992, 'Designer');
var pat = new Person('Pat', 1947, 'Retired');

john.calculateAge();
console.log(pat.lastName);

//"Person" is a constructor here. Capital letter start is the general case for constructors
//When we use "new", a brand new empty object is created, then the constructor is called
//"this" doesn't point to the global object here, instead it points the "new" object that was created
//we have to add all the properties and methods that we want to be inherited, in the constructor's prototype property
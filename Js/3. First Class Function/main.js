// First Class Function [Passing a function as an argument]

//First Class Function
	// A function is an instance of an object type
	// A function behaves like any other object
	// We can store a function in a variable
	// We can pass a function as an argument inside a function
	// We can return a function from a function

var yearOfBirth = [1990, 1965, 1937, 2005, 2001];

//passing a function inside a function
function calculate(arr, fn) {
	var arrResult = [];

	for(i = 0; i < arr.length; i++){
		arrResult.push(fn(arr[i]));
	}

	return arrResult;
}

//call-back function
function findAge(input) {
	return 2019 - input;
}

function isAdult(input) {
	return input >= 18;
}

function maxHeartRate(input) {
	if(input >= 18 && input <= 81) {
		return Math.round(206.9 - (0.67 * input));
	}
	else 
		return -1;
}

//storing a function in a variable
var ages = calculate(yearOfBirth, findAge);
var adults = calculate(ages, isAdult);
var MHR = calculate(ages, maxHeartRate);

console.log(ages);
console.log(adults);
console.log(MHR);
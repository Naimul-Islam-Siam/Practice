//Closures

function retirement(retirementAge) {
	var text = ' years left until retirement.';

	return function(yearOfBirth) {
		var age = 2019 - yearOfBirth;
		console.log(retirementAge - age + text);
	};
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);

//an inner function has access to the variables and parameters of it's outer function, even after the outer function has returned

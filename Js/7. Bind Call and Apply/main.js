//Bind Call and Apply

var john = {
	name: 'John',
	job: 'Teacher',
	age: 26,
	presentation: function (style, timeOfDay) {
		if (style === 'Formal') {
			console.log("Good " + timeOfDay + " everyone. I'm " + this.name + ". I'm a " + this.job + ".");
		} else if (style === 'Casual') {
			console.log("Hey what's up everyone. " + "I'm " + this.name + ". I'm a " + this.job + ". Have a nice " + timeOfDay + ".");
		}
	}
};

var emily = {
	name: 'Emily',
	job: 'Designer',
	age: 24
};

john.presentation("Formal", "Evening");


//<----- Call Method ----->

john.presentation.call(emily, "Casual", "Morning");

//The first argument of "call" method is "this" variable
//Rest of the arguments are as usual
//When we pass emily as the first or "this" argument, it replaces all the name, job and age properties to emily's
//This is called "method borrowing". We borrowed the method from "john" to apply it on "emily"


//<----- Apply Method ----->

//john.presentation.apply(emily, ["Formal", "Night"]);

//"apply" method takes first argument as "this" and the next argument as an array
//here out function won't work. cause it won't accept array as an argument


//<----- Bind Method ----->

var johnCasual = john.presentation.bind(john, "Casual");
johnCasual("Morning");
johnCasual("Afternoon");

var emilyFormal = john.presentation.bind(emily, "Formal");
emilyFormal("Evening");

//"bind" doesn't immediately call the function, it instead generate a copy of the function so that we can store it somewhere
//Creates function with preset arguments
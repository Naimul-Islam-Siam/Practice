// variables
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let notExistence: undefined = undefined;

// built in Object
let now: Date = new Date();

//Array
let colors: string[] = [ 'red', 'black', 'white' ];
let numbers: number[] = [ 1, 2, 3, 4 ];
let decisions: boolean[] = [ true, false, true ];

//class
class Car {
	//
}

let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
	x: 10,
	y: 5
};

//function
const logNumber = (num: number): void => {
	console.log(num);
};

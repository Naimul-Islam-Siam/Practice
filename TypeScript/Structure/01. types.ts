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
let dates: (string | Date)[] = [ '22-11-19', new Date() ];

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

//tuples
type Drink = [string, boolean, number]; //type alias

const pepsi: Drink = [ 'brown', true, 40 ];
const sprite: Drink = [ 'white', true, 40 ];
const tea: [string, boolean, number] = [ 'brown', false, 0 ];

let drink: { color: string; carbonated: boolean; sugar: number } = {
	color: 'brown',
	carbonated: true,
	sugar: 30
};

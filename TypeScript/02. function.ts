function returnMyName(myName): string {
	return myName;
} // the function will return a string

function print(): void {
	console.log('Hello World');
	//return something; // this will cause error as the return type is void, so it can't return anything
} // this function will has a void return type

function multuply(num1: number, num2: number): number {
	return num1 * num2;
} // first argument must be a number, second argument must be a number, the function will return a number

let myMultiply = (val1: number, val2: number): number => val1 * val2;
// this is not a function
// this is the structure of the function myMultiply which should have 2 arguments both having a number type and the function will return a number
// this ensures myMultiply can't be assigned with anything other than the structured format;

//myMultiply = multiply(5, 4); is allowed
//myMultiply = print(); is not allowed

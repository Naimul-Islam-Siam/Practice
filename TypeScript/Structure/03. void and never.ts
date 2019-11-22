//void
const log = (message: string): void => {
	console.log('message');
};
// this means this function is not supposed to return anything, so if we accidentally return anything, TS will show error
//
//
//

//never
const throwError = (message: string): never => {
	throw new Error(message);
};
//when we're absolutely 100% sure the function won't return anything
//in this case the function is not returning anything and will never return anything. It'll just throw error.
//
//
//

//
const another = (message: string): string => {
	if (!message) throw new Error(message);
	else return message;
};
//we annotate a function with the type "never" only when we never truly expect it to return anything
//if we atleast expect it to return something eventually, in that case we annotate with the type that we are expecting to be returned
//so, even if there's a slight possibility of the function to return something, we can't use "never"

var age = 27; // typescript will automatically figure out the type of "age" as "number"
//age = "hi"; //it's not allowed as age is of "number" type and "hi" is of "string" type
var hasHobbies = true;
// hasHobbies = 24; // not allowed
//==========================
// explicitly defining types
//==========================
var year;
year = 2019;
// year = "2019" is not allowed
//if we declare a variable like this:
//let year;
//year = 2019;
//year = "2019"
//TS won't find any errors cause type of year is "any" in this way
//to avoid this we can explicitly set the type of the variable:
//===================
//------arrays-------
//===================
var hobbies = ['cooking', 'singing'];
console.log(hobbies);
// if we do this:
//let hobbies = ["cooking", "singing"];
//hobbies = [100];
// it will show error
// as the first element of the array hobbies is a "string" TS will consider the hobbies array as an array of strings. So it won't allow any numbers in it
//=================
//-----tuples------
//=================
var address = ['Manhattan', 100]; //setting the order of types
// address = [ 100, 'Manhattan' ]; won't be allowed
// the first element must be string and the second one must be a number
// ================
// union type
// ================
var newAge; //newAge can be either a number or a string
newAge = 25;
newAge = '25';
//newAge = true; //this is not allowed
// ================
// check type
// ================
var finalValue = 30;
if (typeof finalValue === 'string') {
    // in this case the type name must be inside " " or ' '
    console.log('Type of finalValue is string');
}
else {
    console.log('finalValue is not a string');
}

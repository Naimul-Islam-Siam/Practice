let age = 27; // typescript will automatically figure out the type of "age" as "number"
//age = "hi"; //it's not allowed as age is of "number" type and "hi" is of "string" type

let hasHobbies = true;
// hasHobbies = 24; // not allowed

// explicitly defining types

//if we declare a variable like this:
//let year;
//year = 2019;
//year = "2019"
//TS won't find any errors cause type of year is "any" in this way
//to avoid this we can explicitly set the type of the variable:

let year: number;
year = 2019;
// year = "2019" is not allowed

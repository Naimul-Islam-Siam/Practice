//Primitives vs Objects 
//Numbers, strings, booleans, undefined and null are primitives everything else are objects

//Primitives
var a  = 23;
var b = a;

a = 45;

console.log(a); //expected result 45
console.log(b); //expected result 23

//each of the variables of primitives copy and hold their own data, they don't refer to anything
//when we say b = a, we just copy the value of 'a' and store it to 'b'.
//later we change the value of 'a'. This affects only 'a' not 'b' cause they don't refer to anything

//Objects
var obj1 = {
	name: 'John',
	age: 24
};

var obj2 = obj1;

obj1.age = 35;

console.log(obj1.age); //expected result 35
console.log(obj2.age); //expected result 35

//when we said obj2 = obj1, we didn't create a new object. No copy was created, we just created a new reference for obj2 which points to ob1
//obj1 and obj2 holds a reference that points to the exact same object in the memory
//that's why when we change something in the obj1, the change also occurs in obj2 cause they are the exact same object
 
//Function
var age = 70;
var obj3 = {
	name: 'Pat',
	city: 'NewYork'
};

function change(a, b) {
	a = 43;
	b.name = 'Smith';
}

change(age, obj3);

console.log(age); //expected result 70
console.log(obj3.name); //expected result Smith


//passing a primitive is passing by value
//passing an object is passing by reference
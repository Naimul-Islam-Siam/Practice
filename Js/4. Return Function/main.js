//Return A Function from a Function

function interviewQues(job) {
	if (job === 'Designer') {
		return function (name) {
			console.log(name + ', can you explain what UX design is ?');
		}
	} else if (job === 'Teacher') {
		return function (name) {
			console.log('What do you teach, ' + name + ' ?');
		}
	} else {
		return function (name) {
			console.log('What do you do, ' + name + ' ?');
		}
	}
}
//function having the parameter as 'name' is an anonymous function. As the function doesn't have any NAME of itself. 
//we can return a function in javaScript because function's are always first-class function in JS.


//Template of the object 'Person' using function constructor
var Person = function (name, job) {
	this.name = name;
	this.job = job;
}

//Creating Person objects
var john = new Person('John', 'Designer');
var matt = new Person('Matt', 'Teacher');

//Function execution
var designerQuestion = interviewQues(john.job);
//'designerQuestion' becomes the function that has parameter 'Designer' as job in interviewQues() function.
designerQuestion(john.name);

var teacherQuestion = interviewQues(matt.job);
//'teacherQuestion' becomes the function that has parameter 'Teacher' as job in interviewQues() function.
teacherQuestion(matt.name);

interviewQues('Teacher')('Matt'); //Same as before.
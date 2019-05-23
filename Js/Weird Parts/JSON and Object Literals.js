var objectJavaScript = {
	firstName: 'Siam',
	age: 22,
	code: 'JavaScript'
};

//same object in JSON format
//in JSON properties gotta be quoted
var objectJson = {
	"firstName": 'Siam',
	"age": 22,
	"code": 'JavaScript'
};

//convert JavaScript Object to JSON
var convertedJson = JSON.stringify(objectJavaScript);
console.log(convertedJson);

//convert JSON to JavaScript Object
var convertedJavaScript = JSON.parse(convertedJson);
console.log(convertedJavaScript);
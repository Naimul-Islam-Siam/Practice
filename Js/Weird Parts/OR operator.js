function greet(name) {
	name = name || '<Your name here>';
	console.log('Hello, ' + name);
}

greet('Siam');
greet();

console.log(undefined || true);
console.log(0 || 1);
console.log('hi' || 'hello');

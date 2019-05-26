function greet(firstname, lastname, language) {
	language = language || 'en'; //setting default value as "en"

	if (language === 'en') {
		console.log('Hello ' + firstname + ' ' + lastname);
	}
	if (language === 'es') {
		console.log('Hola ' + firstname + ' ' + lastname);
	}
}

//Function Overloading is not possible in JavaScript, as Functions are Objects in JS
//But we can use patterns like the one below to get the job done

function greetEnglish(firstname, lastname) {
	greet(firstname, lastname); //didn't pass the language parameter. But by default it's "en"
}

function greetSpanish(firstname, lastname) {
	greet(firstname, lastname, 'es');
}

greetEnglish('John', 'Doe');
greetSpanish('Sergio', 'Ramos');

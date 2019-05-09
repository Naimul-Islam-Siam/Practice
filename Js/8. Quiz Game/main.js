(function () {
	function Question(question, options, correctAns) {
		this.question = question;
		this.options = options;
		this.correctAns = correctAns;
	}

	Question.prototype.displayQuestion = function () {
		console.log(this.question);
		for (let i = 0; i < this.options.length; i++) {
			console.log(i + ": " + this.options[i]);
		}
	}

	Question.prototype.checkAnswer = function (ans) {
		if (ans === this.correctAns) {
			console.log("Correct Answer!!");
		} else {
			console.log("Wrong Answer. Try Again :)");
		}
	}

	var q1 = new Question("Is JavaScript the coolest language in the world?",
		["Yes", "No"],
		0);

	var q2 = new Question("Who's the teacher of this course?",
		["Mike", "John", "Jonas", "Matt"],
		2);

	var q3 = new Question("Which of the following best describes coding?",
		["Hard", "Boring", "Easy", "Fun", "Lame"],
		3);

	var questionSet = [q1, q2, q3];

	var randomQuestion = Math.floor(Math.random() * questionSet.length);

	questionSet[randomQuestion].displayQuestion();

	var answer = parseInt(prompt("Choose an option: "));

	questionSet[randomQuestion].checkAnswer(answer);
})();
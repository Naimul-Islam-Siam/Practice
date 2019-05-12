(function() {
	function Question(question, options, correctAns) {
		this.question = question;
		this.options = options;
		this.correctAns = correctAns;
	}

	Question.prototype.displayQuestion = function() {
		console.log(this.question);
		for (let i = 0; i < this.options.length; i++) {
			console.log(i + ': ' + this.options[i]);
		}
	};

	Question.prototype.checkAnswer = function(ans, callback) {
		var sc;

		if (ans === this.correctAns) {
			console.log('Correct Answer!!');
			sc = callback(true);
		} else {
			console.log('Wrong Answer. Try Again :)');
			sc = callback(false);
		}

		this.displayScore(sc);
	};

	Question.prototype.displayScore = function(point) {
		console.log('Your Score is : ' + point);
		console.log('-------------------');
	};

	var q1 = new Question('Is JavaScript the coolest language in the world?', [ 'Yes', 'No' ], 0);

	var q2 = new Question("Who's the teacher of this course?", [ 'Mike', 'John', 'Jonas', 'Matt' ], 2);

	var q3 = new Question(
		'Which of the following best describes coding?',
		[ 'Hard', 'Boring', 'Easy', 'Fun', 'Lame' ],
		3
	);

	function score() {
		var sc = 0;
		return function(correct) {
			if (correct) {
				sc++;
			}
			return sc;
		};
	}

	var keepScore = score();

	var questionSet = [ q1, q2, q3 ];

	function nextQuestion() {
		var randomQuestion = Math.floor(Math.random() * questionSet.length);

		questionSet[randomQuestion].displayQuestion();

		var answer = prompt('Choose an option: ');

		questionSet[randomQuestion].checkAnswer(parseInt(answer), keepScore);

		if (answer !== 'exit') {
			nextQuestion();
		}
	}

	nextQuestion();
})();

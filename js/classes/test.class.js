class Test extends Base {

	constructor(propertyValues) {
		super(propertyValues);

		$("#content").empty();

		var questionList = new QuestionList();
		this.questionList = questionList;
		var alternativeList = new AlternativeList();
		this.alternativeList = alternativeList;

		this.currentQuestion = 0;
		this.answers = [];

		var checkResult = new UserList();
		checkResult.checkResult(() => {
			if (checkResult.length > 0) {
				var userDenied = new UserDenied();
				if (showResult) {
					userDenied.grade = checkResult[0].grade;
					userDenied.points = checkResult[0].points;
					userDenied.time = checkResult[0].time;
					userDenied.display('#content');
				} else {
					userDenied.display('#content');
					$('#result').hide();
				}
			} else {
				questionList.readAllQuestions(() => {
					this.populateAnswers();

					alternativeList.readAllAlternatives(() => {
						this.showQuestion();
						this.startTimer();
					});

				});
			}
		});

	}

	/* Inserts dummy data in array containing the users answers */
	populateAnswers() {
		for (var question of this.questionList) {
			question.nbrOfQuestions = this.questionList.length;
			this.answers.push(-1);
		}
	}

	/* Starts the timer which keeps track how long the test took */
	startTimer() {
		var self = this;
		self.seconds = 0;
		self.testTime = setInterval(function () {
			self.seconds++;
		}, 1000);
	}

	/* Inserts selected alternatives into the database when submitting */
	insertAnswers(callback) {
		for (let i = 0; i < this.answers.length; i++) {
			this.db.insertAnswer({
				user_userId: user,
				alternative_alternativeId: this.answers[i]
			}, callback);
		}
	}

	/* Shows a specific question,its alternatives and buttons */
	showQuestion() {
		$('#content').empty();
		this.questionList[this.currentQuestion].display('#content');
		for (var alternative of this.alternativeList) {
			if (alternative.question_questionId === this.questionList[this.currentQuestion].questionId) {
				alternative.display('#alternatives');
			}
		}

		var buttons = new Buttons();
		buttons.nbrOfQuestions = this.questionList.length;
		buttons.test = this;
		buttons.display('#content');
		$(() => {
			buttons.setDisabled(this.currentQuestion);
		});
	}

	/* Automatically calculated number of correct answers,
	calculated a grade and inserts the result into the database */
	autoCorrect() {
		var points = new CorrectAnswerList();

		points.readCorrectAnswers(() => {
			var g = Math.floor(this.questionList.length * 0.5);
			var vg = Math.floor(this.questionList.length * 0.75);
			var grade;

			if (points.length < g) {
				grade = 'IG';
			} else if (points.length >= g && points.length < vg) {
				grade = 'G';
			} else {
				grade = 'VG';
			}

			var time = this.calcTime();
			this.insertResult(grade, points.length, time);
			this.showThanks(grade, points.length, time);
		});
	}

	/* Convert and returns seconds to hours, minutes and seconds
	in a formatted way */
	calcTime() {
		clearInterval(this.testTime);
		var hours = Math.floor(this.seconds / 3600);
		this.seconds %= 3600;
		var minutes = Math.floor(this.seconds / 60);
		var seconds = this.seconds % 60;

		var time = '';
		if (hours < 10) {
			time = time + '0';
		}
		time = time + hours + ':';

		if (minutes < 10) {
			time = time + '0';
		}
		time = time + minutes + ':';

		if (seconds < 10) {
			time = time + '0';
		}
		time = time + seconds;
		return time;
	}

	/* Inserts the result into the database when submitting */
	insertResult(grade, points, time, callback) {
		this.db.insertResult({
			user_userId: user,
			grade: grade,
			points: points,
			time: time
		}, callback);
	}

	/* Shows a confirmation when submitting, with or without result
	based on the global showResult variable */
	showThanks(grade, points, time) {
		var thanks = new Thanks();
		if (showResult) {
			thanks.grade = grade;
			thanks.points = points;
			thanks.time = time;

		}

		$('#content').empty();
		thanks.display('#content');

		if (!showResult) {
			$('#result').hide();
		}
	}

	static get sqlQueries() {
		return {
			insertAnswer: `
    			INSERT user_answers_alternative SET ?
     		`,
			insertResult: `
    			INSERT result SET ?
     		`
		}

	}
}
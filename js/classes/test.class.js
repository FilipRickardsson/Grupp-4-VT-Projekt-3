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
				userDenied.grade = checkResult[0].grade;
				userDenied.points = checkResult[0].points;
				userDenied.time = checkResult[0].time;
				
				userDenied.display('#content');
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

	populateAnswers() {
		for (var question of this.questionList) {
			question.nbrOfQuestions = this.questionList.length;
			this.answers.push(-1);
		}
	}

	startTimer() {
		var self = this;
		self.seconds = 0;
		self.set = setInterval(function () {
			self.seconds++;
			console.log(self.seconds);
		}, 1000);
	}

	insertAnswers(callback) {
		for (let i = 0; i < this.answers.length; i++) {
			this.db.insertAnswer({
				user_userId: user,
				alternative_alternativeId: this.answers[i]
			}, callback);
		}
	}

	showQuestion() {
		$('#content').empty();
		this.questionList[this.currentQuestion].display('#content');

		for (var alternative of this.alternativeList) {
			if (alternative.question_questionId === this.questionList[this.currentQuestion].questionId) {
				alternative.display('#content');
			}
		}

		var buttons = new Buttons();
		buttons.nbrOfQuestions = this.questionList.length;
		buttons.test = this;
		buttons.display('#content');
		$(() => {
			buttons.setVisibility(this.currentQuestion);
		});

	}

	autoCorrect() {
		var points = new CorrectAnswerList();

		points.readCorrectAnswers(() => {
			var g = Math.floor(this.questionList.length * 0.5);
			var vg = Math.floor(this.questionList.length * 0.75);
			var grade;
			var result = [];

			console.log('Points length:', points.length);

			if (points.length < g) {
				grade = 'IG';
			} else if (points.length >= g && points.length < vg) {
				grade = 'G';
			} else {
				grade = 'VG';
			}

			clearInterval(this.set);
			var hours = Math.floor(this.seconds / 3600);
			this.seconds %= 3600;
			var minutes = Math.floor(this.seconds / 60);
			var seconds = this.seconds % 60;
			var time = hours + ':' + minutes + ':' + seconds;

			result.push(grade);
			result.push(points.length);
			result.push(time);

			this.insertGrade(grade, points.length, time);

			$('.jumbotron').append('<p>Grade: ' + grade + ' </p>');
			$('.jumbotron').append('<p>Points: ' + points.length + '</p>');
			$('.jumbotron').append('<p>Time: ' + time + '</p>');
		});
	}

	insertGrade(grade, points, time, callback) {
		this.db.insertGrade({
			user_userId: user,
			grade: grade,
			points: points,
			time: time
		}, callback);
	}


	static get sqlQueries() {
		return {
			insertAnswer: `
    			INSERT user_answers_alternative SET ?
     		`,
			insertGrade: `
    			INSERT result SET ?
     		`
		}

	}
}
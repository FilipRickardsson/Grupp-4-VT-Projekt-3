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

		var checkGrade = new UserList();
		checkGrade.checkGrade(() => {
			if (checkGrade.length > 0) {
				var userDenied = new UserDenied();
				userDenied.display('#content');
			} else {
				questionList.readAllQuestions(() => {
					for (var question of this.questionList) {
						question.nbrOfQuestions = this.questionList.length;
						this.answers.push(1);
					}

					alternativeList.readAllAlternatives(() => {
						this.showQuestion();
						
					});

				});

			}
		});

	}

	insertAnswers(callback) {
		for (let i = 0; i < this.answers.length; i++) {
			this.db.insertAnswer({
				user_userId: window.user,
				alternative_optionId: this.answers[i]
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
$(()=>{buttons.setVisibility(this.currentQuestion);});

	}

	autoCorrect() {
		var autoCorr = new CorrectAnswerList();

		autoCorr.readCorrectAnswers(() => {
			var g = Math.floor(this.questionList.length * 0.5);
			var vg = Math.floor(this.questionList.length * 0.75);
			var grade;

			console.log('g', g);
			console.log('vg', vg);
			console.log('AutoCorr length:', autoCorr.length);

			if (autoCorr.length < g) {
				console.log('if 1');
				grade = 'ig';
			} else if (autoCorr.length >= g && autoCorr.length < vg) {
				console.log('if 2');
				grade = 'g';
			} else {
				console.log('if 3');
				grade = 'vg';
			}

			this.insertGrade(grade);
		});
	}

	insertGrade(grade, callback) {
		this.db.insertGrade({
			user_userId: window.user,
			grade: grade,
			points: 0,
			time: 'no time'
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
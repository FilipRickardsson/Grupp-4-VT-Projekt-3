class Buttons extends Base {

	constructor(propertyValues = {}) {
		super(propertyValues);
		$('#btnPrev').hide();
		$('#btnNext').hide();
	}

	/* Disables previous button when on first question
	Disables next button when on last question */
	setDisabled(currentQuestion) {
		if (currentQuestion == 0) {
			$('#btnPrev').prop('disabled', true);
			$('#btnNext').prop('disabled', false);
		} else if (currentQuestion == this.nbrOfQuestions - 1) {
			$('#btnPrev').prop('disabled', false);
			$('#btnNext').prop('disabled', true);
		} else {
			$('#btnPrev').prop('disabled', false);
			$('#btnNext').prop('disabled', false);
		}
	}

	/* Switches to the next question */
	next() {
		if (this.test.currentQuestion + 1 > this.test.questionList.length - 1) {
			return;
		}
		this.collectAnswer();
		this.test.currentQuestion++;
		this.test.showQuestion();
	}

	/* Switches to the previous question */
	prev() {
		if (this.test.currentQuestion - 1 < 0) {
			return;
		}
		this.collectAnswer();
		this.test.currentQuestion--;
		this.test.showQuestion();
	}

	/* Submits the test */
	submit() {
		this.collectAnswer();
		this.test.insertAnswers();
		this.test.autoCorrect();
	}

	/* Stores the selected answer */
	collectAnswer() {
		var answer = $("input[type=radio][name=radio-button]:checked").val();
		if (answer !== undefined) {
			this.test.answers[this.test.currentQuestion] = answer;
		}
	}

}
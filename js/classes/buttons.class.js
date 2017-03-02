class Buttons extends Base {

	constructor(propertyValues = {}) {
		super(propertyValues);
		$('#btnBack').hide();
		$('#btnNext').hide();
	}

	setVisibility(currentQuestion) {
		if (currentQuestion == 0) {
			$('#btnBack').prop('disabled', true);
			$('#btnNext').prop('disabled', false);
		} else if (currentQuestion == this.nbrOfQuestions - 1) {
			$('#btnBack').prop('disabled', false);
			$('#btnNext').prop('disabled', true);
		} else {
			$('#btnBack').prop('disabled', false);
			$('#btnNext').prop('disabled', false);
		}
	}

	next() {
		if (this.test.currentQuestion + 1 > this.test.questionList.length - 1) {
			return;
		}
		var answer = $("input[type=radio][name=radio-button]:checked").val();
		this.test.answers[this.test.currentQuestion] = answer;
		this.test.currentQuestion++;
		this.test.showQuestion();
	}

	prev() {
		if (this.test.currentQuestion - 1 < 0) {
			return;
		}
		var answer = $("input[type=radio][name=radio-button]:checked").val();
		this.test.answers[this.test.currentQuestion] = answer;
		this.test.currentQuestion--;
		this.test.showQuestion();
	}

	submit() {
		var answer = $("input[type=radio][name=radio-button]:checked").val();
		this.test.answers[this.test.currentQuestion] = answer;

		this.test.insertAnswers();

		var thanks = new Thanks();
		$('#content').empty();
		thanks.display('#content');

		var result = this.test.autoCorrect();
		console.log('result', result);
	}

}
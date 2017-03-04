class Buttons extends Base {

	constructor(propertyValues = {}) {
		super(propertyValues);
		$('#btnPrev').hide();
		$('#btnNext').hide();
	}

	setVisibility(currentQuestion) {
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

	next() {
		if (this.test.currentQuestion + 1 > this.test.questionList.length - 1) {
			return;
		}
		this.collectAnswer();
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
		this.collectAnswer();
		
		this.test.insertAnswers();

		var thanks = new Thanks();
		$('#content').empty();
		thanks.display('#content');

		var result = this.test.autoCorrect();
	}

	collectAnswer() {
		var answer = $("input[type=radio][name=radio-button]:checked").val();
		this.test.answers[this.test.currentQuestion] = answer;
	}

}
class Buttons extends Base {

	constructor(propertyValues = {}) {
		super(propertyValues);
	}

	next() {
		if(this.test.currentQuestion + 1 > this.test.questionList.length - 1) {
			return;
		}
		this.test.currentQuestion++;
		this.test.showQuestion();
	}

	prev() {
		if(this.test.currentQuestion - 1 < 0) {
			return;
		}
		this.test.currentQuestion--;
		this.test.showQuestion();
	}

	submit() {
		console.log('Submit button');
	}

}
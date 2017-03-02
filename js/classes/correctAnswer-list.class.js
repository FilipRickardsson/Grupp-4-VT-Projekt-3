class CorrectAnswerList extends List {

	constructor(items) {
		super(CorrectAnswer, items);
	}

	readCorrectAnswers(callback) {
		this.db.autoCorrect([window.user], (data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			autoCorrect: `
				SELECT *
				FROM user_answers_alternative
				JOIN alternative
				ON alternative_alternativeId = alternativeId
				WHERE user_userId = ? AND correct = 1
      	`
		}
	}

}
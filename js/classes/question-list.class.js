class QuestionList extends List {

	constructor(items) {
		super(Question, items);
	}

	/* Fetches all the questions from the database */
	readAllQuestions(callback) {
		this.db.readAllQuestions([this.testId], (data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readAllQuestions: `
				SELECT questionId, text
				FROM question
				JOIN test_has_question
				WHERE questionId = question_questionId AND test_testId = ?
      	`
		}
	}

}
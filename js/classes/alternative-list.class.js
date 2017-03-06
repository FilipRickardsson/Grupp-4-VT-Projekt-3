class AlternativeList extends List {

	constructor(items) {
		super(Alternative, items);
	}

	/* Fetches all alternatives for a test from the database */
	readAllAlternatives(callback) {
		this.db.readAllAlternatives([this.testId], (data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readAllAlternatives: `
				SELECT *
				FROM alternative
				JOIN question_has_alternative
				ON alternativeId = alternative_alternativeId
				JOIN test_has_question
				ON question_has_alternative.question_questionId = test_has_question.question_questionId
				WHERE test_testId = ?
			`
		}
	}


}
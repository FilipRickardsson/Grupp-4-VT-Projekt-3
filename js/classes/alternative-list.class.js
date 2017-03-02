class AlternativeList extends List {

	constructor(items) {
		super(Alternative, items);
	}

	readAllAlternatives(callback) {
		this.db.readAllAlternatives((data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readAllAlternatives: `
			SELECT alternative_alternativeId, question_has_alternative.question_questionId, alternative, correct
			FROM alternative
			JOIN question_has_alternative
			ON alternativeId = alternative_alternativeId
      `
		}
	}


}
class QuestionList extends List {

	constructor(items) {
		super(Question, items);
	}

	readAllQuestions(callback) {
		this.db.readAll((data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readAll: `
        SELECT questionId, text FROM question
      `
		}
	}

}
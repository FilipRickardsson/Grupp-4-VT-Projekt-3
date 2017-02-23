class QuestionList extends List {

	constructor(items) {
		super(Question, items);
	}

	readAllQuestions(callback) {
		this.db.readAllQuestions((data) => {
			this.push.apply(this, data);
			console.log(data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readAllQuestions: `
        SELECT questionId, text FROM question
      `
		}
	}

}
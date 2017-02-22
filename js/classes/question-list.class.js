class QuestionList extends List {

	constructor(items) {
		super(Question, items);
	}

	readAllFromDb(callback) {
		this.db.readAll((data) => {
			this.push.apply(this, data);
			console.log(data);
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
class ResultList extends List {

	constructor(items) {
		super(Result, items);
	}

	/* Fetches all results for the current user */
	readAllResult(callback) {
		this.db.readAllResult([this.testId], (data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readAllResult: `
				SELECT * 
				FROM result 
				JOIN user 
				ON user_userId = userId
				WHERE test_testId = ?
      	`
		}
	}

}
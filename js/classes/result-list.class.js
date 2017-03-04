class ResultList extends List {

	constructor(items) {
		super(Result, items);
	}

	readAllResult(callback) {
		this.db.readAllResult((data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readAllResult: `
				SELECT * FROM result JOIN user ON user_userId = userId
      	`
		}
	}

}
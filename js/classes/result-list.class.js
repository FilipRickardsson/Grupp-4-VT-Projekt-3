class ResultList extends List {

	constructor(items) {
		super(Result, items);
	}

	readAllResult(callback) {
		this.db.readAllResult((data) => {
			this.push.apply(this, data);
			console.log(data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readAllResult: `
        SELECT * FROM result
      `
		}
	}

}
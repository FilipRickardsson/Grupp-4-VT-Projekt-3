class SurveyList extends List {

	constructor(items) {
		super(Survey, items);
	}

	/* Fetches user from the database */
	readAllSurveys(callback) {
		this.db.readAllSurveys((data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readAllSurveys: `
        		SELECT * FROM test
			`
		}
	}

}
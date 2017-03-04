class SurveyList extends List {

	constructor(items) {
		super(Survey, items);
	}

	/* Fetches user from the database */
	readAllSurveys(callback) {
		this.db.readAllSurveys([user],(data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readAllSurveys: `
				SELECT * 
				FROM user
				JOIN class
				ON user.class_className = className
				JOIN class_has_test
				ON className = class_has_test.class_className
				JOIN test
				ON test_testID = testID
				WHERE userId = ?
			`
		}
	}

}
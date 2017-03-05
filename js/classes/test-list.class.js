class TestList extends List {

	constructor(items) {
		super(Test, items);
	}

	/* Fetches < user from the database */
	readAvailableTests(callback) {
		this.db.readAvailableTests([user], (data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readAvailableTests: `
				SELECT * 
				FROM user
				JOIN class_has_test
				ON user.class_className = class_has_test.class_className
				JOIN test
				ON test_testID = testID
				WHERE userId = ?
			`
		}
	}

}
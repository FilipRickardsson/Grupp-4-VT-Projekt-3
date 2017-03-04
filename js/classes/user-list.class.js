class UserList extends List {

	constructor(items) {
		super(User, items);
	}

	/* Fetches user from the database */
	login(callback) {
		this.db.login({
			userId: user
		}, (data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	/* Fetches all results for current user */
	checkResult(callback) {
		this.db.checkResult([user, this.testId], (data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	/* Fetches all results for current user */
	checkAllResults(callback) {
		this.db.checkAllResults([user], (data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			login: `
        		SELECT * FROM user WHERE ?
			`,

			checkResult: `
        		SELECT * FROM result WHERE user_userId = ? AND test_testId = ?
			`,

			checkAllResults: `
        		SELECT * FROM result WHERE user_userId = ?
			`
		}
	}

}
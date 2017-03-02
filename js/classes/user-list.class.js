class UserList extends List {

	constructor(items) {
		super(User, items);
	}

	login(callback) {
		this.db.login({
			userId: user
		}, (data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	checkResult(callback) {
		this.db.checkResult({
			user_userId: user
		}, (data) => {
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
        		SELECT * FROM user_answers_alternative WHERE ?
			`
		}
	}

}
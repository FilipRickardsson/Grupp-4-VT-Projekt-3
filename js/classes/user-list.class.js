class UserList extends List {

	constructor(items) {
		super(User, items);
	}

	login(callback) {
		this.db.login({
			userId: window.user
		}, (data) => {
			this.push.apply(this, data);
			callback();
		});
	}

	checkGrade(callback) {
		this.db.checkGrade({
			user_userId: window.user
		}, (data) => {
			this.push.apply(this, data);
			callback();
		});
	}


	static get sqlQueries() {
		return {
			login: `
        	SELECT *
			FROM user
			WHERE ?
			`,

			checkGrade: `
        	SELECT *
			FROM user_answers_alternative
			WHERE ?
			`
		}
	}

}
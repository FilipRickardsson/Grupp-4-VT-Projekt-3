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
			from user
			WHERE ?
			`,

			checkGrade: `
        	SELECT *
			from grade
			WHERE ?
			`
		}
	}

}
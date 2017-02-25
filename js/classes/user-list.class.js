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

	static get sqlQueries() {
		return {
			login: `
        	SELECT *
			from user
			WHERE ?
			`
		}
	}

}
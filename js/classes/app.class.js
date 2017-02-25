class App {

	constructor() {
		var user = 'bob@student.com';
		//var user = 'john@teacher.com';
		window.user = user;

		console.log('start');

		var login = new UserList();
		login.login(() => {
			if (login.length > 0) {
				if (login[0].role == 's') {
					new Test();
				} else {
					new ResultView();
				}
			}
			else {
				console.log('user not found');
			}
		});


		// Development tool
		var bootstrapSizeTool = new BootstrapSize();
		bootstrapSizeTool.display('body');

		var header = new Header();
		header.display('body');

		var content = new Content();
		content.display('body');

		var footer = new Footer();
		footer.display('body');

	}
}
class App {

	constructor() {
		
		var login = new UserList();
		/* Checks if the user exist and if the user is a student or a teacher */
		login.login(() => {
			if (login.length > 0) {
				if (login[0].role == 'S') {
					var studentTests = new StudentTestView();
					studentTests.display('#content');
				} else {
					var resultView = new ResultView();
					resultView.display('#content');
				}
			} else {
				var userUnknown = new UserUnknown();
				userUnknown.display('#content');
			}
		});

		var header = new Header();
		header.display('body');

		var content = new Content();
		content.display('body');

		var footer = new Footer();
		footer.display('body');
		
	}
}
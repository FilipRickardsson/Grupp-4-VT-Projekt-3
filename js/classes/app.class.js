class App {

	constructor() {
		
		var login = new UserList();
		login.login(() => {
			if (login.length > 0) {
				if (login[0].role == 's') {
					new Test();
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
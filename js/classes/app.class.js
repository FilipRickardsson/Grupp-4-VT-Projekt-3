class App {
 
	constructor() {
    var user = 'bob@student.com';
    window.user = user;
		console.log('start');

		// Development tool
		var bootstrapSizeTool = new BootstrapSize();
		bootstrapSizeTool.display('body');

		var header = new Header();
		header.display('body');

		var content = new Content();
		content.display('body');

		var footer = new Footer();
		footer.display('body');

		// Some routes
		var router = new Router({
			'/': () => {
				window.a = new Test();
			},
			'/result': () => {
				new ResultView();
			},

		});


		/*     if(student) {
		      new Test();

		     }
		     else{
		     	new ResultView();
		     } */
	}
}

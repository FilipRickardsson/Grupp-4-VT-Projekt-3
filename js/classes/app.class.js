class App {

	constructor() {

		console.log('start');

		// Development tool
		var bootstrapSizeTool = new BootstrapSize();
		bootstrapSizeTool.display('body');

		/*
		var a = new Question({
			questionId: 1,
			text: 'This is text',
		});

		a.display('body');
		*/

		var questionList = new QuestionList();
		window.questionList = questionList;


		questionList.readAllFromDb(() => {
			console.log("Read from DB", questionList);
			questionList.display('body');
		});
		
		console.log('debug 1');

	}
}
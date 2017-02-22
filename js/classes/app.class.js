class App {

	constructor() {

		console.log('start');

		// Development tool
		var bootstrapSizeTool = new BootstrapSize();
		bootstrapSizeTool.display('body');

		var questionList = new QuestionList();
		questionList.readAllQuestions();
		console.log('debug 1');
		questionList.display('body');

	}
}
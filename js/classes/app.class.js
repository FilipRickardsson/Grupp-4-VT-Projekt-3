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

		var resultList = new ResultList();

		resultList.readAllResult(() => {
			console.log("Read from DB", resultList);
			resultList.display('body');
		});
		
		console.log('debug 1');


		var alternativeList = new AlternativeList();

	 	alternativeList.readAllAlternatives(() => {
			console.log("Read from DB", alternativeList);
			alternativeList.display('body');
		});
		
		console.log('debug 2');

/*
		var questionList = new QuestionList();

		questionList.readAllQuestions(() => {
			console.log("Read from DB", questionList);
			questionList.display('body');
		});
		
		console.log('debug 1');


		var alternativeList = new AlternativeList();

	 	alternativeList.readAllAlternatives(() => {
			console.log("Read from DB", alternativeList);
			alternativeList.display('body');
		});
		
		console.log('debug 2');
		*/
		
		
	}
}
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

		questionList.readAllFromDb(() => {
			console.log("Read from DB", questionList);
			questionList.display('body');
		});
		
		console.log('debug 1');


		//var alternativeList = new AlternativeList();
/*
	 	alternativeList.readAllAlternatives(() => {
			console.log("Read from DB", alternativeList);
			alternativeList.display('body');
		});
	*/	
		console.log('debug 2');
		
		
	}
}
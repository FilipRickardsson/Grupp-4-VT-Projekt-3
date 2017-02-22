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

		questionList.readAllQuestions(() => {
			//console.log("Read from DB", questionList);
			//			questionList.display('body');
		});

		console.log('debug 1');


		var alternativeList = new AlternativeList();


		alternativeList.readAllAlternatives(() => {
			//console.log(alternativeList);

			questionList.forEach(function (question) {

				alternativeList.forEach(function (alternative) {
					if (alternative.question_questionId == question.questionId) {
						if (question.alternatives === undefined) {
							question.alternatives = [];
						}
						question.alternatives.push(alternative);
					}
				});

			});

			//alternativeList.display('body');

			for (let i = 0; i < questionList.length; i++) {
				questionList[i].display('body');
				questionList[i].alternatives[0].display('body');
				questionList[i].alternatives[1].display('body');
			}
		});

		questionList.tjosan = 'näää inge tjosan här inte...';

		console.log('debug 1.1');

		console.log(questionList);

		window.questionList = questionList;

		console.log('debug 2');

	}
}
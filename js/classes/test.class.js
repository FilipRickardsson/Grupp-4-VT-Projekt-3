class Test extends Base {

	constructor(propertyValues) {
		super(propertyValues);
		$("#content").empty();
		var questionList = new QuestionList();
		this.questionList = questionList;
		var alternativeList = new AlternativeList();

		questionList.readAllQuestions(() => {

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
				
			});

			this.showQuestion(0);
		});

	}

	showQuestion(index) {
		console.log('1', this.questionList);
		console.log('2', this.questionList.length);
		console.log('3', this.questionList[index]);
		console.log('4', this.questionList[index].alternatives);
		
		this.questionList[index].display('#content');
		for (let j = 0; this.questionList[index].alternatives.length; j++) {
			this.questionList[index].alternatives[j].display('#content');
		}


	}
}
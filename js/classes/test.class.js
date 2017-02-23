class Test extends Base {

	constructor(propertyValues) {
		super(propertyValues);
		$("#content").empty();
		var questionList = new QuestionList();
		this.questionList = questionList;
		var alternativeList = new AlternativeList();
		this.alternativeList = alternativeList;

		questionList.readAllQuestions(() => {

			alternativeList.readAllAlternatives(() => {
				//console.log(alternativeList);
				this.showQuestion(0);
			});

		});
	}

	showQuestion(index) {
		this.questionList[index].display('#content');
		
		for (var alternative of this.alternativeList) {
			if (alternative.question_questionId === this.questionList[index].questionId) {
				alternative.display('#content');
			}
		}
		
		var buttons = new Buttons();
		buttons.display('#content');
	}
}
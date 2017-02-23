class Test extends Base {

  constructor(propertyValues){
    super(propertyValues);
      $( "#content").empty();
 var questionList = new QuestionList();
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
	/*			for (let i = 0; i < questionList.length; i++) {
					questionList[i].display('#content');

					for (let j = 0; j < questionList[i].alternatives.length; j++) {
						questionList[i].alternatives[j].display('#content');
					}
					var buttons = new Buttons();
					buttons.display('#content');
				}
*/
			});

		});
   
   this.showQuestion(0);
  }
 
showQuestion(index) {
     console.log(a);
      questionList[index].display('#content');
      for(let j = 0; questionsList[j].alternatives.length; j++) {
        questionList[index].alternatives[j].display('#content');
      }  
    

 }
}
class StudentTestView extends Base {

	constructor(propertyValues = {}) {
		super(propertyValues);

		var surveyList = new SurveyList();
		
		surveyList.readAllSurveys(() => {
			surveyList.display('#availableTests');
		});
	}

}
class TeacherTestView extends Base {

	constructor(propertyValues = {}) {
		super(propertyValues);

		var surveyList = new SurveyList();
		
		surveyList.readAvailableSurveys(() => {
			surveyList.display('#availableTestList');
		});
	}

}
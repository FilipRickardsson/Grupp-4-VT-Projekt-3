class StudentTestView extends Base {

	constructor(propertyValues = {}) {
		super(propertyValues);

		var surveyList = new SurveyList();
		var submittedList = new UserList();

		surveyList.readAvailableSurveys(() => {
			submittedList.checkAllResults(() => {
				var available = [];
				var submitted = []

				console.log(surveyList);
				console.log(submittedList);

				surveyList.forEach(function (survey) {
					var found = false;

					submittedList.forEach(function (submitted) {
						console.log(survey.testId, ' ', submitted.test_testId);
						if (survey.testId === submitted.test_testId) {
							found = true;
						}

					});

					if (found) {
						submitted.push(survey);

					} else {
						available.push(survey);

					}


				});
				
				if (available.length == 0) {
					$('#availableTestList').append('<li>None</li>');
				}

				if (submitted.length == 0) {
					$('#completedTestList').append('<li>None</li>');
				}

				submitted.forEach(function (el) {
					el.display('#completedTestList');
				});

				available.forEach(function (el) {
					el.display('#availableTestList');
				});

			});
		});
	}

}
class StudentTestView extends Base {

	constructor(propertyValues = {}) {
		super(propertyValues);

		var testList = new TestList();
		var submittedList = new UserList();

		testList.readAvailableTests(() => {
			submittedList.checkAllResults(() => {
				var available = [];
				var submitted = [];

				testList.forEach(function (test) {
					var found = false;

					submittedList.forEach(function (submitted) {
						if (test.testId === submitted.test_testId) {
							found = true;
						}

					});

					if (found) {
						submitted.push(test);

					} else {
						available.push(test);

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
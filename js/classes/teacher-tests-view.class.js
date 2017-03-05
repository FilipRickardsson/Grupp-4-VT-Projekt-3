class TeacherTestView extends Base {

	constructor(propertyValues = {}) {
		super(propertyValues);

		var testList = new TestList();
		
		testList.readAvailableTests(() => {
			testList.display('#availableTestList');
		});
	}

}
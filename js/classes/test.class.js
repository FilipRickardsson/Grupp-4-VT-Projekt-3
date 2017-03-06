class Test extends Base {

	constructor(propertyValues = {}) {
		super(propertyValues);
	}

	/* Views a list with available tests */
	selectTest() {
		if (student) {
			var testView = new TestView();
			testView.testId = this.testId;
			testView.showResult = this.showResult;
			testView.loadTest();
		} else {
			var result = new ResultView();
			result.testId = this.testId;
			result.loadResult();
			result.display('#content');
		}
	}

}
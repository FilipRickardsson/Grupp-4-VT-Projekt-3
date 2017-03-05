class Survey extends Base {

	constructor(propertyValues = {}) {
		super(propertyValues);
	}

	selectTest() {
		if (student) {
			var test = new Test();
			test.testId = this.testId;
			test.showResult = this.showResult;
			test.loadTest();
		} else {
			var result = new ResultView();
			result.testId = this.testId;
			result.loadResult();
			result.display('#content');
		}
	}

}
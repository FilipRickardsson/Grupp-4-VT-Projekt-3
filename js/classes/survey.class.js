class Survey extends Base {

	constructor(propertyValues = {}) {
		super(propertyValues);
	}

	selectTest() {
		if (student) {
			var test = new Test();
			test.testId = this.testId;
			test.loadTest();
		} else {
			var result = new ResultView();
			result.testId = this.testId;
			result.loadResult();
			console.log('crap', this.testId);
			result.display('#content');
		}
	}

}
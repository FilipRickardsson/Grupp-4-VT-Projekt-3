class Survey extends Base {

	constructor(propertyValues = {}) {
		super(propertyValues);
	}

	selectTest() {
		var test = new Test();
		test.testId = this.testId;
		test.loadTest();
	}

}
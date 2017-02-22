class Question extends Base {

	constructor(propertyValues = {}) {
		super(propertyValues);

	}

	static get sqlQueries() {
		return {
			newPetOwner: `
        INSERT petowners SET ?
      `
		}
	}


}
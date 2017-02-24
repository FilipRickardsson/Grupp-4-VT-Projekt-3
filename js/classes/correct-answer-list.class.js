class CorrectAnswerList extends List {

	constructor(items) {
		super(Correction, items);
	}

	readAllCorrectAlternatives(callback) {
		this.db.readAllCorrectAlternatives((data) => {
			this.push.apply(this, data);
			//console.log(data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readAllCorrectAlternatives: `
        SELECT question_questionId, alternativeId 
FROM question_has_alternative, alternative
WHERE alternative_alternativeId = alternativeId 
AND correct = 1;
      `
		}
	}
}
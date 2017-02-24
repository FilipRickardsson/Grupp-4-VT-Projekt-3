class StudentAnswerList extends List {

	constructor(items) {
		super(StudentAnswer, items);
	}

	readUserAnswer(callback) {
		this.db.readUserAnswer((data) => {
			this.push.apply(this, data);
			//console.log(data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readUserAnswer: `
        SELECT * 
from user_answers_alternative
WHERE user_userId = 'bob@student.com'
      `
		}
	}

}
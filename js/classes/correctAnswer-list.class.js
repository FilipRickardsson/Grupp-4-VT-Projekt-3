class CorrectAnswerList extends List {

    constructor(items) {
        super(Question, items);
    }

    static get sqlQueries() {
        return {
            autoCorrect: `
    	SELECT *
FROM user_answers_alternative
JOIN alternative
ON alternative_optionId = alternativeId
WHERE user_userId = 'bob@student.com' AND correct = 1
      `
        }


    }
}
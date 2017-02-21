/* Get all alternatives */
SELECT question_has_alternative.question_questionId, alternative, correct
FROM alternative
JOIN question_has_alternative
ON alternativeId = alternative_alternativeId

/* Get all questions */
SELECT questionId, text
FROM question

/* Get all grades */
SELECT firstname, surname, grade
FROM user
JOIN grade
ON userId = user_userId
WHERE role = 's'

/* Class */

INSERT INTO class VALUES ('Class1');
INSERT INTO class VALUES ('Class2');
INSERT INTO class VALUES ('Class3');	

/* Users */

INSERT INTO user VALUES ('bob@student.com', 'Bob', 'Bobsson', 's', 'Class1');
INSERT INTO user VALUES ('jane@student.com', 'Jane', 'Janesson', 's', 'Class1');

INSERT INTO user VALUES ('john@teacher.com', 'John', 'Jonsson', 't', 'Class1');

INSERT	INTO	user	VALUES	('jeanette@student.com','Jeanette',	'Karlsson','s', 	'Class2');	
INSERT	INTO	user	VALUES	('harald@student.com',	'Harald',	'Schrinkeln','s', 	'Class2');	
INSERT	INTO	user	VALUES	('botilda@teacher.com',	'Botilda',	'Efraimsdotter','t',	'Class2');	
INSERT	INTO	user	VALUES	('werner@student.com',	'Werner',	'Abrahamsson',	's',	'Class3');
INSERT	INTO	user	VALUES	('august@student.com',	'August',	'Strindberg','s', 	'Class3');	
INSERT	INTO	user	VALUES	('fatima@teacher.com',	'Fatima',	'Rashid',	't',	'Class3');

/*Test has Question*/
INSERT	INTO	test_has_question	(	test_testId	,	question_questionId	)	VALUES	('	1'	,'	1'	)	;
INSERT	INTO	test_has_question	(	test_testId	,	question_questionId	)	VALUES	('	1'	,'	2'	)	;
INSERT	INTO	test_has_question	(	test_testId	,	question_questionId	)	VALUES	('	1'	,'	3'	)	;
INSERT	INTO	test_has_question	(	test_testId	,	question_questionId	)	VALUES	('	1'	,'	4'	)	;
INSERT	INTO	test_has_question	(	test_testId	,	question_questionId	)	VALUES	('	1'	,'	5'	)	;
INSERT	INTO	test_has_question	(	test_testId	,	question_questionId	)	VALUES	('	2'	,'	6'	)	;
INSERT	INTO	test_has_question	(	test_testId	,	question_questionId	)	VALUES	('	2'	,'	7'	)	;
INSERT	INTO	test_has_question	(	test_testId	,	question_questionId	)	VALUES	('	2'	,'	8'	)	;
INSERT	INTO	test_has_question	(	test_testId	,	question_questionId	)	VALUES	('	2'	,'	9'	)	;
INSERT	INTO	test_has_question	(	test_testId	,	question_questionId	)	VALUES	('	2'	,'	10'	)	;
INSERT	INTO	test_has_question	(	test_testId	,	question_questionId	)	VALUES	('	3'	,'	11'	)	;
INSERT	INTO	test_has_question	(	test_testId	,	question_questionId	)	VALUES	('	3'	,'	12'	)	;
INSERT	INTO	test_has_question	(	test_testId	,	question_questionId	)	VALUES	('	3'	,'	13'	)	;
INSERT	INTO	test_has_question	(	test_testId	,	question_questionId	)	VALUES	('	3'	,'	14'	)	;
INSERT	INTO	test_has_question	(	test_testId	,	question_questionId	)	VALUES	('	3'	,'	15'	)	;



/* Questions */

INSERT INTO question (text, class_classname) VALUES ('What is 1 + 1?', 'Class1', '1');
INSERT INTO question (text, class_classname) VALUES ('In what county is Malmö?', 'Class1');
INSERT INTO question (text, class_classname) VALUES ('Is pizza the best thing ever?', 'Class1');
INSERT INTO question (text, class_classname) VALUES ('Do you like coding?', 'Class1');
INSERT INTO question (text, class_classname) VALUES ('Surname of Isaac?', 'Class1');
INSERT INTO question (text, class_classname) VALUES ('What is color black?', 'Class1');
INSERT INTO question (text, class_classname) VALUES ('What is color white?', 'Class1');
INSERT INTO question (text, class_classname) VALUES ('What animal is Donald?', 'Class1');
INSERT INTO question (text, class_classname) VALUES ('Who is Luke Skywalkers father?', 'Class1');
INSERT INTO question (text, class_classname) VALUES ('How many legs does a chair have?', 'Class1');
INSERT INTO question (text, class_classname) VALUES ('Who is Clark Kent really?', 'Class1');
INSERT INTO question (text, class_classname) VALUES ('What is the difference between an array and an arrayList in Java?', 'Class1');
INSERT INTO question (text, class_classname) VALUES ('How do you save data for use while the program is running?', 'Class1');
INSERT INTO question (text, class_classname) VALUES ('What keyword do you use to create a new object in Java?', 'Class1');
INSERT INTO question (text, class_classname) VALUES ('What date is new years eve?', 'Class1');

/* Options */

INSERT INTO alternative (alternative, correct) VALUES ('none', false);

INSERT INTO alternative (alternative, correct) VALUES ('1', false);
INSERT INTO alternative (alternative, correct) VALUES ('2', true);
INSERT INTO alternative (alternative, correct) VALUES ('3', false);

INSERT INTO alternative (alternative, correct) VALUES ('Blekinge', false);
INSERT INTO alternative (alternative, correct) VALUES ('Småland', false);
INSERT INTO alternative (alternative, correct) VALUES ('Skåne', true);

INSERT INTO alternative (alternative, correct) VALUES ('Yes', true);
INSERT INTO alternative (alternative, correct) VALUES ('No', false);

INSERT INTO alternative (alternative, correct) VALUES ('Yes', true);
INSERT INTO alternative (alternative, correct) VALUES ('No', false);

INSERT INTO alternative (alternative, correct) VALUES ('Paddington', false);
INSERT INTO alternative (alternative, correct) VALUES ('Arlington', false);
INSERT INTO alternative (alternative, correct) VALUES ('Newton', true);

INSERT INTO alternative (alternative, correct) VALUES ('Red', false);
INSERT INTO alternative (alternative, correct) VALUES ('Presence of color', false);
INSERT INTO alternative (alternative, correct) VALUES ('Absence of color', true);

INSERT INTO alternative (alternative, correct) VALUES ('Yellow', false);
INSERT INTO alternative (alternative, correct) VALUES ('Absence of color', true);
INSERT INTO alternative (alternative, correct) VALUES ('All colors at the same time', false);

INSERT INTO alternative (alternative, correct) VALUES ('Cow', false);
INSERT INTO alternative (alternative, correct) VALUES ('Dock', false);
INSERT INTO alternative (alternative, correct) VALUES ('Duck', true);

INSERT INTO alternative (alternative, correct) VALUES ('Darth Maul', false);
INSERT INTO alternative (alternative, correct) VALUES ('Darth Who', false);
INSERT INTO alternative (alternative, correct) VALUES ('Darth Vader', true);

INSERT INTO alternative (alternative, correct) VALUES ('ONE', false);
INSERT INTO alternative (alternative, correct) VALUES ('NINE', false);
INSERT INTO alternative (alternative, correct) VALUES ('FOUR', true);

INSERT INTO alternative (alternative, correct) VALUES ('Batman', false);
INSERT INTO alternative (alternative, correct) VALUES ('Superman', true);
INSERT INTO alternative (alternative, correct) VALUES ('Truman', false);

INSERT INTO alternative (alternative, correct) VALUES ('No difference', false);
INSERT INTO alternative (alternative, correct) VALUES ('Itteration', true);
INSERT INTO alternative (alternative, correct) VALUES ('Irretation', false);

INSERT INTO alternative (alternative, correct) VALUES ('Concrete', false);
INSERT INTO alternative (alternative, correct) VALUES ('Variable', true);
INSERT INTO alternative (alternative, correct) VALUES ('Constant', false);

INSERT INTO alternative (alternative, correct) VALUES ('Owed', false);
INSERT INTO alternative (alternative, correct) VALUES ('New', true);
INSERT INTO alternative (alternative, correct) VALUES ('Blue', false);

INSERT INTO alternative (alternative, correct) VALUES ('1 JAN', false);
INSERT INTO alternative (alternative, correct) VALUES ('31 DEC', true);
INSERT INTO alternative (alternative, correct) VALUES ('24 DEC', false);

/* Link questions to options */

INSERT INTO question_has_alternative VALUES ('1',' 2');				
INSERT INTO question_has_alternative VALUES ('1',' 3');				
INSERT INTO question_has_alternative VALUES ('1',' 4');				
				
INSERT INTO question_has_alternative VALUES ('2',' 5');				
INSERT INTO question_has_alternative VALUES ('2',' 6');				
INSERT INTO question_has_alternative VALUES ('2',' 7');				
				
INSERT INTO question_has_alternative VALUES ('3',' 8');				
INSERT INTO question_has_alternative VALUES ('3',' 9');				
				
INSERT INTO question_has_alternative VALUES ('4',' 10');				
INSERT INTO question_has_alternative VALUES ('4',' 11');				
				
INSERT INTO question_has_alternative VALUES ('5',' 12');				
INSERT INTO question_has_alternative VALUES ('5',' 13');				
INSERT INTO question_has_alternative VALUES ('5',' 14');				
				
INSERT INTO question_has_alternative VALUES ('6',' 15');				
INSERT INTO question_has_alternative VALUES ('6',' 16');				
INSERT INTO question_has_alternative VALUES ('6',' 17');				
				
INSERT INTO question_has_alternative VALUES ('7',' 18');				
INSERT INTO question_has_alternative VALUES ('7',' 19');				
INSERT INTO question_has_alternative VALUES ('7',' 20');				
				
INSERT INTO question_has_alternative VALUES ('8',' 21');				
INSERT INTO question_has_alternative VALUES ('8',' 22');				
INSERT INTO question_has_alternative VALUES ('8',' 23');				
				
INSERT INTO question_has_alternative VALUES ('9',' 24');				
INSERT INTO question_has_alternative VALUES ('9',' 25');				
INSERT INTO question_has_alternative VALUES ('9',' 26');				
				
INSERT INTO question_has_alternative VALUES ('10',' 27');				
INSERT INTO question_has_alternative VALUES ('10',' 28');				
INSERT INTO question_has_alternative VALUES ('10',' 29');				
				
INSERT INTO question_has_alternative VALUES ('11',' 30');				
INSERT INTO question_has_alternative VALUES ('11',' 31');				
INSERT INTO question_has_alternative VALUES ('11',' 32');				
				
INSERT INTO question_has_alternative VALUES ('12',' 33');				
INSERT INTO question_has_alternative VALUES ('12',' 34');				
INSERT INTO question_has_alternative VALUES ('12',' 35');				
				
INSERT INTO question_has_alternative VALUES ('13',' 36');				
INSERT INTO question_has_alternative VALUES ('13',' 37');				
INSERT INTO question_has_alternative VALUES ('13',' 38');				
				
INSERT INTO question_has_alternative VALUES ('14',' 39');				
INSERT INTO question_has_alternative VALUES ('14',' 40');				
INSERT INTO question_has_alternative VALUES ('14',' 41');				
				
INSERT INTO question_has_alternative VALUES ('15',' 42');				
INSERT INTO question_has_alternative VALUES ('15',' 43');				
INSERT INTO question_has_alternative VALUES ('15',' 44');				


/* Alternatives answered by students */				
				
INSERT INTO user_answers_alternative VALUES ('bob@student.com',' 3');				
INSERT INTO user_answers_alternative VALUES ('bob@student.com',' 6');				
INSERT INTO user_answers_alternative VALUES ('bob@student.com',' 8');				
INSERT INTO user_answers_alternative VALUES ('bob@student.com',' 11');				
INSERT INTO user_answers_alternative VALUES ('bob@student.com',' 13');				
INSERT INTO user_answers_alternative VALUES ('bob@student.com',' 16');				
INSERT INTO user_answers_alternative VALUES ('bob@student.com',' 20');				
INSERT INTO user_answers_alternative VALUES ('bob@student.com',' 22');				
INSERT INTO user_answers_alternative VALUES ('bob@student.com',' 26');				
INSERT INTO user_answers_alternative VALUES ('bob@student.com',' 27');				
INSERT INTO user_answers_alternative VALUES ('bob@student.com',' 32');				
INSERT INTO user_answers_alternative VALUES ('bob@student.com',' 33');				
INSERT INTO user_answers_alternative VALUES ('bob@student.com',' 36');				
INSERT INTO user_answers_alternative VALUES ('bob@student.com',' 39');				
INSERT INTO user_answers_alternative VALUES ('bob@student.com',' 42');				



/* Grades */

INSERT INTO grade (user_userId, grade) VALUES ('bob@student.com', 'g');
INSERT INTO grade (user_userId, grade) VALUES ('jane@student.com', 'vg');
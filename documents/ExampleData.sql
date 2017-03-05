/* Class */

INSERT INTO class VALUES ('Class1');
INSERT INTO class VALUES ('Class2');

/* Users */

INSERT INTO user VALUES ('leo@student.com', 'Leo', 'Shatri', 's', 'Class1');
INSERT INTO user VALUES ('filip@student.com', 'Filip', 'Rickardsson', 's', 'Class2');
INSERT INTO user VALUES ('tobias@student.com', 'Tobias', 'Hjertelundh', 's', 'Class2');
INSERT INTO user VALUES ('fatemeh@student.com', 'Fatemeh', 'Farmahini', 's', 'Class2');
INSERT INTO user VALUES ('david@student.com', 'David', 'Jonsson', 's', 'Class1');

INSERT INTO user VALUES ('john@teacher.com', 'John', 'Jonsson', 't', 'Class1');
INSERT INTO user VALUES ('jane@teacher.com', 'Jane', 'Janesson', 't', 'Class2');

/*Tests*/														
														
INSERT INTO test (name, showResult) VALUES ('Basics', true);
INSERT INTO test (name, showResult) VALUES ('Color Test', false);
INSERT INTO test (name, showResult) VALUES ('Geek Test', true);

/* Questions */

INSERT INTO question (text) VALUES ('What is 1 + 1?');
INSERT INTO question (text) VALUES ('In what county is Malmö?');
INSERT INTO question (text) VALUES ('Is pizza the best thing ever?');

INSERT INTO question (text) VALUES ('Which color is Blue?');
INSERT INTO question (text) VALUES ('Which color is Green?');
INSERT INTO question (text) VALUES ('Which color is Yellow?');
INSERT INTO question (text) VALUES ('Which color is White?');

INSERT INTO question (text) VALUES ('Who is Clark Kent really?');
INSERT INTO question (text) VALUES ('Who is Luke Skywalkers father?');
INSERT INTO question (text) VALUES ('How fast is the flash?');
INSERT INTO question (text) VALUES ('Why is Batman best?');

/* texts */

INSERT INTO alternative (text, correct) VALUES ('1', false);
INSERT INTO alternative (text, correct) VALUES ('2', true);
INSERT INTO alternative (text, correct) VALUES ('3', false);

INSERT INTO alternative (text, correct) VALUES ('Blekinge', false);
INSERT INTO alternative (text, correct) VALUES ('Småland', false);
INSERT INTO alternative (text, correct) VALUES ('Skåne', true);

INSERT INTO alternative (text, correct) VALUES ('Yes', true);
INSERT INTO alternative (text, correct) VALUES ('No', false);

INSERT INTO alternative (text, correct) VALUES ('Red', false);
INSERT INTO alternative (text, correct) VALUES ('Blue', true);
INSERT INTO alternative (text, correct) VALUES ('White', false);

INSERT INTO alternative (text, correct) VALUES ('Green', true);
INSERT INTO alternative (text, correct) VALUES ('Red', false);
INSERT INTO alternative (text, correct) VALUES ('Blue', false);

INSERT INTO alternative (text, correct) VALUES ('Blue', false);
INSERT INTO alternative (text, correct) VALUES ('Green', false);
INSERT INTO alternative (text, correct) VALUES ('Yellow', true);

INSERT INTO alternative (text, correct) VALUES ('All', true);
INSERT INTO alternative (text, correct) VALUES ('None', false);

INSERT INTO alternative (text, correct) VALUES ('Batman', false);														
INSERT INTO alternative (text, correct) VALUES ('Superman', true);														
INSERT INTO alternative (text, correct) VALUES ('Aquaman', false);														

INSERT INTO alternative (text, correct) VALUES ('Darth Maul', false);														
INSERT INTO alternative (text, correct) VALUES ('Darth Who', false);														
INSERT INTO alternative (text, correct) VALUES ('Darth Vader', true);														

INSERT INTO alternative (text, correct) VALUES ('30 km/h', false);
INSERT INTO alternative (text, correct) VALUES ('60 km/h', false);
INSERT INTO alternative (text, correct) VALUES ('A bit faster than that', true);

INSERT INTO alternative (text, correct) VALUES ('He has best tactics', false);
INSERT INTO alternative (text, correct) VALUES ('His belt contains like everything', true);
INSERT INTO alternative (text, correct) VALUES ('Because he is the goddamn Batman!', true);

/* question_has_alternative */

INSERT INTO question_has_alternative VALUES (1, 1);
INSERT INTO question_has_alternative VALUES (1, 2);
INSERT INTO question_has_alternative VALUES (1, 3);

INSERT INTO question_has_alternative VALUES (2, 4);
INSERT INTO question_has_alternative VALUES (2, 5);
INSERT INTO question_has_alternative VALUES (2, 6);

INSERT INTO question_has_alternative VALUES (3, 7);
INSERT INTO question_has_alternative VALUES (3, 8);

INSERT INTO question_has_alternative VALUES (4, 9);
INSERT INTO question_has_alternative VALUES (4, 10);
INSERT INTO question_has_alternative VALUES (4, 11);

INSERT INTO question_has_alternative VALUES (5, 12);
INSERT INTO question_has_alternative VALUES (5, 13);
INSERT INTO question_has_alternative VALUES (5, 14);

INSERT INTO question_has_alternative VALUES (6, 15);
INSERT INTO question_has_alternative VALUES (6, 16);
INSERT INTO question_has_alternative VALUES (6, 17);

INSERT INTO question_has_alternative VALUES (7, 18);
INSERT INTO question_has_alternative VALUES (7, 19);

INSERT INTO question_has_alternative VALUES (8, 20);
INSERT INTO question_has_alternative VALUES (8, 21);
INSERT INTO question_has_alternative VALUES (8, 22);

INSERT INTO question_has_alternative VALUES (9, 23);
INSERT INTO question_has_alternative VALUES (9, 24);
INSERT INTO question_has_alternative VALUES (9, 25);

INSERT INTO question_has_alternative VALUES (10, 26);
INSERT INTO question_has_alternative VALUES (10, 27);
INSERT INTO question_has_alternative VALUES (10, 28);

INSERT INTO question_has_alternative VALUES (11, 29);
INSERT INTO question_has_alternative VALUES (11, 30);
INSERT INTO question_has_alternative VALUES (11, 31);

/* test_has_question */

INSERT INTO test_has_question VALUES (1, 1);
INSERT INTO test_has_question VALUES (1, 2);
INSERT INTO test_has_question VALUES (1, 3);

INSERT INTO test_has_question VALUES (2, 4);
INSERT INTO test_has_question VALUES (2, 5);
INSERT INTO test_has_question VALUES (2, 6);
INSERT INTO test_has_question VALUES (2, 7);

INSERT INTO test_has_question VALUES (3, 8);
INSERT INTO test_has_question VALUES (3, 9);
INSERT INTO test_has_question VALUES (3, 10);
INSERT INTO test_has_question VALUES (3, 11);

/* class_has_test */

INSERT INTO class_has_test VALUES ('Class1', 1);
INSERT INTO class_has_test VALUES ('Class1', 2);

INSERT INTO class_has_test VALUES ('Class2', 3);

/* Answers */
/*
INSERT INTO user_answers_alternative VALUES ('bob@student.com', 3);
INSERT INTO user_answers_alternative VALUES ('bob@student.com', 6);
INSERT INTO user_answers_alternative VALUES ('bob@student.com', 7);
*/

/* Grades */
/*
INSERT INTO grade (user_userId, grade) VALUES ('bob@student.com', 'g');
INSERT INTO grade (user_userId, grade) VALUES ('jane@student.com', 'vg');
*/
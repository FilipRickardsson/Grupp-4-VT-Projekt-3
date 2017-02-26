/* Class */

INSERT INTO class VALUES ('Class1');	

/* Users */

INSERT INTO user VALUES ('bob@student.com', 'Bob', 'Bobsson', 's', 'Class1');
INSERT INTO user VALUES ('jane@student.com', 'Jane', 'Janesson', 's', 'Class1');

INSERT INTO user VALUES ('john@teacher.com', 'John', 'Jonsson', 't', 'Class1');

/* Questions */

INSERT INTO question (text, class_classname) VALUES ('What is 1 + 1?', 'Class1');
INSERT INTO question (text, class_classname) VALUES ('In what county is Malmö?', 'Class1');
INSERT INTO question (text, class_classname) VALUES ('Is pizza the best thing ever?', 'Class1');

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

/* Link questions to options */

INSERT INTO question_has_alternative VALUES (1, 2);
INSERT INTO question_has_alternative VALUES (1, 3);
INSERT INTO question_has_alternative VALUES (1, 4);

INSERT INTO question_has_alternative VALUES (2, 5);
INSERT INTO question_has_alternative VALUES (2, 6);
INSERT INTO question_has_alternative VALUES (2, 7);

INSERT INTO question_has_alternative VALUES (3, 8);
INSERT INTO question_has_alternative VALUES (3, 9);

/* Answers */

INSERT INTO user_answers_alternative VALUES ('bob@student.com', 3);
INSERT INTO user_answers_alternative VALUES ('bob@student.com', 6);
INSERT INTO user_answers_alternative VALUES ('bob@student.com', 7);

/* Grades */

INSERT INTO grade (user_userId, grade) VALUES ('bob@student.com', 'g');
INSERT INTO grade (user_userId, grade) VALUES ('jane@student.com', 'vg');
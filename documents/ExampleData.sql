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

INSERT INTO `projekt_3_vt`.`question` (`questionId`, `text`, `class_className`) VALUES ('4', 'Do you like coding?', 'Class1');
INSERT INTO `projekt_3_vt`.`question` (`questionId`, `text`, `class_className`) VALUES ('5', 'Surname of Isaac?', 'Class1');
INSERT INTO `projekt_3_vt`.`question` (`questionId`, `text`, `class_className`) VALUES ('6', 'What is color black?', 'Class1');
INSERT INTO `projekt_3_vt`.`question` (`questionId`, `text`, `class_className`) VALUES ('7', 'What is color white?', 'Class1');
INSERT INTO `projekt_3_vt`.`question` (`questionId`, `text`, `class_className`) VALUES ('8', 'What animal is Donald?', 'Class1');
INSERT INTO `projekt_3_vt`.`question` (`questionId`, `text`, `class_className`) VALUES ('9', 'Who is Luke Skywalkers father?', 'Class1');
INSERT INTO `projekt_3_vt`.`question` (`questionId`, `text`, `class_className`) VALUES ('10', 'How many legs does a chair have?', 'Class1');
INSERT INTO `projekt_3_vt`.`question` (`questionId`, `text`, `class_className`) VALUES ('11', 'Who is Clark Kent really?', 'Class1');
INSERT INTO `projekt_3_vt`.`question` (`questionId`, `text`, `class_className`) VALUES ('12', 'What is the difference between an array and an arrayList in Java?', 'Class1');
INSERT INTO `projekt_3_vt`.`question` (`questionId`, `text`, `class_className`) VALUES ('13', 'How do you save data for use while the program is running?', 'Class1');
INSERT INTO `projekt_3_vt`.`question` (`questionId`, `text`, `class_className`) VALUES ('14', 'What keyword do you use to create a new object in Java?', 'Class1');
INSERT INTO `projekt_3_vt`.`question` (`questionId`, `text`, `class_className`) VALUES ('15', 'What date is new years eve?', 'Class1');



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
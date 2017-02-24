class App {

    constructor() {

        console.log('start');
        var user = 'bob@student.com';
        window.user = user;

        // Development tool
        var bootstrapSizeTool = new BootstrapSize();
        bootstrapSizeTool.display('body');

        var header = new Header();
        header.display('body');

        var content = new Content();
        content.display('body');

        var footer = new Footer();
        footer.display('body');


        /*
        var a = new Question({
        	questionId: 1,
        	text: 'This is text',
        });

        a.display('body');
        */

        console.log('debug 1');

        var questionList = new QuestionList();
        var alternativeList = new AlternativeList();

        /* var studentAnswerList = new StudentAnswerlist();*/

        questionList.readAllQuestions(() => {

            alternativeList.readAllAlternatives(() => {
                //console.log(alternativeList);

                questionList.forEach(function (question) {

                    alternativeList.forEach(function (alternative) {
                        if (alternative.question_questionId == question.questionId) {
                            if (question.alternatives === undefined) {
                                question.alternatives = [];
                            }
                            question.alternatives.push(alternative);
                        }
                    });

                });

                //alternativeList.display('body');

                for (let i = 0; i < questionList.length; i++) {
                    questionList[i].display('#content');

                    for (let j = 0; j < questionList[i].alternatives.length; j++) {
                        questionList[i].alternatives[j].display('#content');
                    }
                    var buttons = new Buttons();
                    buttons.display('#content');
                }

                var resultList = new ResultList();

                resultList.readAllResult(() => {
                    console.log("Read from DB", resultList);
                    resultList.display('#content');


                });

            });

        });
        var correctAnswerList = new CorrectAnswerList();
        var studentAnswer = new StudentAnswerList();
        correctAnswerList.readAllCorrectAlternatives(() => {
            console.log(correctAnswerList);
            studentAnswer.readUserAnswer(() => {
            console.log(studentAnswer);
                for(let i = 0; i < studentAnswer.length; i++){
                    for(let i = 0; i < correctAnswerList.length; i++){
                        if(studentAnswer[i] === correctAnswerList[i]){
                            var points++
                        }
                    }
                }
                    
                    return points;
            });
        });



        console.log(questionList);


        console.log('debug 2');
        console.log(correctAnswerList);

        console.log('debug 3');


    }
}
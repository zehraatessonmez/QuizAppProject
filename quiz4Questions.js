function Question(problem, choice, answer) {
    this.problem = problem;
    this.choice = choice;
    this.answer = answer;
}


var questions = [
    new Question("What is the name of the girl that saves Katniss in the games?", ["Sue", "Rue","Cato", "Fox Face"],"Rue"),
	new Question("Finish the line: may the odds be...", ["greater with good behaviour", "never in your favor","better than the others", "ever in your favor"],"ever in your favor"),
	new Question("What is Katniss's sister's name?", ["Lavender Everdeen", "Rose Evergreen","Primrose Everdeen", "Primerib Everdeen"],"Primrose Everdeen"),
	new Question("Peeta and his family are...", ["hunters", "coal miners","bakers", "peace keepers"],"bakers"),
	new Question("Who is Seneca Crane?", ["stylist", "president","peace keeper", "game maker"],"game maker"),
	new Question("What is the name of the poison berries that lead to the death of Fox Face?", ["Nightlock", "Poison pricks","Dark berries", "Night berries"],"Nightlock"),
	new Question("What is Gale's nickname for Katniss?", ["Catnip", "Katy","Catpee", "Kat"],"Catnip"),
	new Question("What district is Cato from?", ["2", "3","1", "10"],"2"),
	new Question("Who is Katniss and Peeta's mentor?", ["Cinna", "Haymitch","Seneca", "Effie"],"Haymitch"),
	new Question("Why does Thresh spare Katniss during the games?", ["for Rue", "he wanted her to win","he loved her", "they were in an alliance"],"for Rue")	
];


//yeni bir quiz oluşturuyoruz
var quiz4 = new QuizApp(questions);

function QuizApp(questions){
    this.questions = questions;
	this.score = 0;
    this.questionIndex = 0;
}

QuizApp.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

QuizApp.prototype.questionOption = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
		}
	this.questionIndex++;
}

QuizApp.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function questionNumber() {
    var currentQuestionNumber = quiz4.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = currentQuestionNumber + " / " + quiz4.questions.length;
};

function questionOption(id, questionOption) {
      var button = document.getElementById(id);
      button.onclick = function() {
      quiz4.questionOption(questionOption);
      displayQuiz();
    }
};


function displayQuiz() {
    if(quiz4.isEnded()) {
        Result();
    }
    else {
        //show qyestion 
        var element = document.getElementById("question");
        element.innerHTML = quiz4.getQuestionIndex().problem;

        // seçenekleri gösteriyoruz indexine göre 
        var choice = quiz4.getQuestionIndex().choice;
        for(var i = 0; i < choice.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choice[i];
            questionOption("btn" + i, choice[i]);
        }

        questionNumber();
    }
};



function Result() {
    var finish = "<h1> SCORE</h1>";
    finish += "<h2 id='score'> You Did " + quiz4.score + "/10 </h2> ";
    var element = document.getElementById("quiz4");
    element.innerHTML = finish;
};


displayQuiz();
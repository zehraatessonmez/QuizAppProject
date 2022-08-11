function Question(problem, choice, answer) {
    this.problem = problem;
    this.choice = choice;
    this.answer = answer;
}


var questions = [
    new Question("Which order brought about the death of the Jedi?", ["Order 55", "Order 66","Order 77", "Order 88"], "Order 66"),
    new Question("Who played Princess Leia?", ["Gillian Anderson", "Sigourney Weaver", "Linda Hamilton", "Carrie Fisher"], "Carrie Fisher"),
    new Question("Which character said “Nine companions. So be it. You shall be the fellowship of the ring.”Who are the only two characters who appear in every Star Wars movie?What is the name of Galadriel's husband?", ["C-3PO and R2-D2", "Luke and Leia", "Han and Chewbacca", "Darth Vader and Emperor Palpatine"], "C-3PO and R2-D2"),
	new Question("On which planet do we first meet Rey in The Force Awakens?", ["Farlax", "Tatooine", "Dantooine", "Jakku"], "Jakku"),
    new Question("Which furry species lives on the forest moon of Endor?", ["Ewoks", "Wookiees", "Hutts", "Jawas"], "Ewoks"),
	new Question("What is the name of Poe Dameron’s astromech droid?", ["AA-7", "BB-8","CC-9", "DD-10"], "BB-8"),
	new Question("Who originally played Han Solo?", ["Mel Gibson", "Harrison Ford","Sylvester Stallone", "James Brolin"], "Harrison Ford"),
	new Question("Who is Boba Fett’s father?", ["Bango Fett", "Dango Fett","Jango Fett", "Rango Fett"], "Jango Fett"),
	new Question("Which of these movies is the one where Luke finds out Vader is his father?",["Return of the Jedi", "The Empire Strikes Back","The Force Awakens", "Attack of the Clones"], "The Empire Strikes Back"),
	new Question("How old was Yoda when he died?", ["600", "700", "800", "900"], "900")
];



//yeni bir quiz oluşturuyoruz
var quiz3 = new QuizApp(questions);

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
    var currentQuestionNumber = quiz3.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = currentQuestionNumber + " / " + quiz3.questions.length;
};

function questionOption(id, questionOption) {
      var button = document.getElementById(id);
      button.onclick = function() {
      quiz3.questionOption(questionOption);
      displayQuiz();
    }
};


function displayQuiz() {
    if(quiz3.isEnded()) {
        Result();
    }
    else {
        //show qyestion 
        var element = document.getElementById("question");
        element.innerHTML = quiz3.getQuestionIndex().problem;

        // seçenekleri gösteriyoruz indexine göre 
        var choice = quiz3.getQuestionIndex().choice;
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
    finish += "<h2 id='score'> You Did " + quiz3.score + "/10 </h2> ";
    var element = document.getElementById("quiz3");
    element.innerHTML = finish;
};


displayQuiz();
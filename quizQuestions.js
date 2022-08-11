function Question(problem, choice, answer) {
    this.problem = problem;
    this.choice = choice;
    this.answer = answer;
}


var questions = [
    new Question("How many Harry Potter books are there in total?", ["2", "7","12", "1"], "7"),
    new Question("Who wrote them all?", ["Dav Pilkey", "J.K.Rowling", "David Walliams", "Anthony McPartlin"], "J.K.Rowling"),
    new Question("In which year was Harry born?", ["1991", "1976","2002", "1980"], "1980"),
    new Question("What shape scar does Harry have on his forehead?", ["A Cat", "A Moon", "A Fidget spinner", "A lightning bolt"], "A lightning bolt"),
	new Question("Who does Harry live with before going to Hogwarts?", ["The Simpsons", "The Menaces", "The Dursleys", "The Sheerans"], "The Dursleys"),
    new Question("What are Hufflepuff's house colours?", ["black and yellow", "red and gold", "green and silver", "blue and bronze"], "black and yellow"),
	new Question("What is the name of Hermione Granger's cat?", ["Bart", "Crookshanks","Peppa", "Sarah"], "Crookshanks"),
	new Question("What’s the name of Hogwarts School’s gamekeeper?", ["Ralph", "Ted","Homer", "Rubeus Hagrid"], "Rubeus Hagrid"),
	new Question("What is inside Harry’s wand?", ["A Battery", "A phoenix feather","A big coiled spring", "his name and address"], "A phoenix feather"),
	new Question("Bludgers, snitches, and quaffles are all used in which sport?", ["snooker", "quidditch","rugby", "wizard netball"], "quidditch")
];


//yeni bir quiz oluşturuyoruz
var quiz1 = new QuizApp(questions);

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
    var currentQuestionNumber = quiz1.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = currentQuestionNumber + " / " + quiz1.questions.length;
};

function questionOption(id, questionOption) {
      var button = document.getElementById(id);
      button.onclick = function() {
      quiz1.questionOption(questionOption);
      displayQuiz();
    }
};


function displayQuiz() {
    if(quiz1.isEnded()) {
        Result();
    }
    else {
     
        var element = document.getElementById("question");
        element.innerHTML = quiz1.getQuestionIndex().problem;

      
        var choice = quiz1.getQuestionIndex().choice;
        for(var i = 0; i < choice.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choice[i];
            questionOption("btn" + i, choice[i]);
        }

        questionNumber();
    }
};



function Result() {
    var finish = "<h1>SCORE</h1>";
    finish += "<h2 id='score'> You Did   " + quiz1.score + " /10 </h2> ";
    var element = document.getElementById("quiz1");
    element.innerHTML = finish;
};


displayQuiz();
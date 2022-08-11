function Question(problem, choice, answer) {
    this.problem = problem;
    this.choice = choice;
    this.answer = answer;
}

var questions = [
    new Question("We all know that Boromir dies saving two of our favorite hobbits. But which book does he die in?", ["The Fellowship of the Ring", "The Two Towers","The Return of the King", "The Last Jedi"], "The Two Towers"),
    new Question("Which of these is another name for dwarves?", ["Luthien’s Folk", "The Old Ones", "The Deep Ones", "Durin’s Folk"], "Durin’s Folk"),
    new Question("Which character said “Nine companions. So be it. You shall be the fellowship of the ring.”", ["elrond", "gandalf","arwen", "saruman"], "elrond"),
    new Question("What is the name of Galadriel's husband?", ["Celebrian", "Celebrimbor", "Celeborn", "Celebrant"], "Celeborn"),
	new Question("After Sauron, who held the One Ring?", ["elrond", "Isildur", "Gollum", "It fell into a river and was lost"], "Isildur"),
    new Question("Where is Legolas from?", ["Fangorn Forest", "Rivendell", "Lothlorian", "Mirkwood"], "Mirkwood"),
	new Question("In The Fellowship of the Ring, Frodo was stabbed on Weathertop. What type of blade was he stabbed with?", ["Morgul", "Mithril","Mithrandir", "Melkor"], "Morgul"),
	new Question("What is the name of the Inn where Aragorn meets the Hobbits?", ["The Prancing Pony", "The Green Dragon","The Ivy Bush", "The Golden Perch"], "The Prancing Pony"),
	new Question("What was Gollum's name before he was Gollum?", ["Deagol", "Smeagol","Falco", "Marcho"], "The Prancing Pony"),
	new Question("How many Rings of Power were there?", ["5", "9","13", "20"], "20")
];


//yeni bir quiz oluşturuyoruz
var quiz2 = new QuizApp(questions);

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
    var currentQuestionNumber = quiz2.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = currentQuestionNumber + " / " + quiz2.questions.length;
};

function questionOption(id, questionOption) {
      var button = document.getElementById(id);
      button.onclick = function() {
      quiz2.questionOption(questionOption);
      displayQuiz();
    }
};


function displayQuiz() {
    if(quiz2.isEnded()) {
        Result();
    }
    else {
       
        var element = document.getElementById("question");
        element.innerHTML = quiz2.getQuestionIndex().problem;

        
        var choice = quiz2.getQuestionIndex().choice;
        for(var i = 0; i < choice.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choice[i];
            questionOption("btn" + i, choice[i]);
        }

        questionNumber();
    }
};



function Result() {
    var finish = "<h1> SCORE </h1>";
    finish += "<h2 id='score'> You Did " + quiz2.score + "/10 </h2> ";
    var element = document.getElementById("quiz2");
    element.innerHTML = finish;
};


displayQuiz();
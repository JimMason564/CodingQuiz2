//Declare variables
var sectionID
var start = document.getElementById("start")
var timer = document.getElementById("time")
var time = 20
var countdown;
var intro = document.getElementById("intro")
var currentQuestionIndex = 0
var questionEl = document.getElementById("questText")
var answersEl = document.getElementById("answers")
var done = document.getElementById("finished")
var questContainer= document.getElementById("questions")
var endSubmit= document.getElementById("irr")
var greenMonster= document.getElementById("scoreboard")
var enterIn= document.getElementById("submit")
var wilson= document.getElementById("seahawks")
// var useIn= document.getElementById("userInput")

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

//Starts quiz
function startQuiz() {
    countdown = setInterval(timeDecrement, 1000);
    timer.textContent = time
    intro.setAttribute("class", "hide")
    showQuestion()
}
//Display question
function showQuestion() {
    currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.title;

    answersEl.innerHTML = ""

    currentQuestion.choices.forEach(function (choice, index) {
        var choiceButton = document.createElement("button")
        choiceButton.setAttribute("value", choice)
        choiceButton.textContent = choice
        answersEl.appendChild(choiceButton)
        choiceButton.onclick = checkAnswer
    })
}

function checkAnswer() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 5;
        if (time < 0) {
            time = 0
        }
        timer.textContent = time
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        gameOver()
    }
    else {
        showQuestion();
    }
}
function timeDecrement() {
    time--;
    timer.textContent = time;
    if (time <= 0) {
        gameOver()
    }
}

start.onclick = startQuiz

//Time out, quiz over
function gameOver() {
    clearInterval(countdown);
    questContainer.setAttribute("class", "hide")
    endSubmit.classList.remove("hide")
    done.textContent= "Game Over";
    document.getElementById("finalScore").textContent = time;
 

var initials= document.querySelector("input").value;
var highscores= JSON.parse(localStorage.getItem("highscores")) || [];
var newScore= {score:time, initials:initials }
highscores.push(newScore);
localStorage.setItem("highscores",JSON.stringify(highscores))
}

function leaderboard() {
    var highscores= JSON.parse(localStorage.getItem("highscores")) || [];
    // highScores.sort(function(a, b) {return b.score - a.score});
    highscores.forEach(function (score, index){
        var listItem= document.createElement("li")
        listItem.textContent = score.initials + " - " + score.score
        greenMonster.appendChild(listItem)
    });
    
  };
  enterIn.onclick= leaderboard
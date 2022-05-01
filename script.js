//Declare variables
var sectionID
var start = document.getElementById("start")
var timer = document.getElementById("time")
var initialsBtN = document.querySelector("initials")
var userScore = document.querySelector("score")
var highScores = document.querySelector("high score")
var time = 20
var countdown;
var intro = document.getElementById("intro")
var currentQuestionIndex= 0
var questionEl= document.getElementById("questText")
var answersEl= document.getElementById("answers")

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
    countdown = setInterval(timer, 1000);
    timer.textContent = time
    intro.setAttribute("class", "hide")
    showQuestion()
}
//Display question
function showQuestion() {
    currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.title;

currentQuestion.choices.forEach(function(choice,index){
    var choiceButton = document.createElement("button")
    choiceButton.setAttribute("value",choice)
    choiceButton.textContent = choice
    answersEl.appendChild(choiceButton)
})
}

function timer() {
    time--;
    timer.textContent = time;
    if (time <= 0) {
        clearInterval(countdown);
    }
}

start.onclick = startQuiz

//If right add point, else wrong take time off timer
function confirm(answer) {

    if (questions[text].correct === true[questionIndex].text[answer]) {
        score++;
        answerCheck.textContent = "You got it!";
    } else {
        time -= 5;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong!"
    }
    //Time out, quiz over
    function gameOver() {


        // show final score
        userScore.textContent = score;
    }
    //Form for high score
    initalsBtn.addEventListener("click", function () {
        let initValue = initials.value();
        if (initValue) {
            let userScore = { username: initValue, userScore: score };
            initialsEl.value = '';
            highScores = JSON.parse(localStorage.getItem("scores")) || [];
            highScores.push(userScore)
            localStorage.setItem("scores", JSON.stringify(highScores));
            hide(highScores);
            renderHighScores();

        }
    })
}
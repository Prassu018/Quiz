const questions = [
    {
        question: "My favorite movie ?(indian)",
        answers:[
                {text:"c",correct:false},
                {text:"dhdsjdhjde",correct:true},
                {text:"dhdsjdhjde",correct:false},
                {text:"dhdsjdhjde",correct:false},
        ]
    },
    {
        question: "What is the capital of France?",
        answers:[
                {text:"dhdsjdhjde",correct:false},
                {text:"dhdsjdhjde",correct:false},
                {text:"dhdsjdhjde",correct:true},
                {text:"dhdsjdhjde",correct:false},
        ]
    },
    {
        question: "What is the capital of France?",
        answers:[
                {text:"dhdsjdhjde",correct:true},
                {text:"dhdsjdhjde",correct:false},
                {text:"dhdsjdhjde",correct:false},
                {text:"dhdsjdhjde",correct:false},
        ]
    },
    {
        question: "What is the capital of France?",
        answers:[
                {text:"dhdsjdhjde",correct:false},
                {text:"dhdsjdhjde",correct:false},
                {text:"dhdsjdhjde",correct:true},
                {text:"dhdsjdhjde",correct:false},
        ]
    },
    {
        question: "What is the capital of France?",
        answers:[
                {text:"dhdsjdhjde",correct:true},
                {text:"dhdsjdhjde",correct:false},
                {text:"dhdsjdhjde",correct:false},
                {text:"dhdsjdhjde",correct:false},
        ]
    },
    {
        question: "What is the capital of France?",
        answers:[
                {text:"dhdsjdhjde",correct:true},
                {text:"dhdsjdhjde",correct:false},
                {text:"dhdsjdhjde",correct:false},
                {text:"dhdsjdhjde",correct:false},
        ]
    },
    {
        question: "What is the capital of France?",
        answers:[
                {text:"dhdsjdhjde",correct:false},
                {text:"dhdsjdhjde",correct:true},
                {text:"dhdsjdhjde",correct:false},
                {text:"dhdsjdhjde",correct:false},
        ]
    },
    {
        question: "What is the capital of France?",
        answers:[
                {text:"dhdsjdhjde",correct:false},
                {text:"dhdsjdhjde",correct:false},
                {text:"dhdsjdhjde",correct:true},
                {text:"dhdsjdhjde",correct:false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerbuttons= document.getElementById("answer-btn");
const nextbutton= document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;



function StartQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML = "next";
    showQuestion();
}
function showQuestion() {
    resetState();  
    answerbuttons.innerHTML = ""; 
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct; }
        button.addEventListener("click",selectAnswer)
    });
}
function resetState(){
    nextbutton.style.display = "none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }

}
function selectAnswer(e){
    const selctedBtn = e.target;
    const isCorrect = selctedBtn.dataset.correct === "true";
    if(isCorrect){
        selctedBtn.classList.add("correct");
        score++;
    }else{
        selctedBtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button =>{
        if(button.dataset.correct ==="true "){
            button.classList.add("correct");
        }
        button.disabled = true;
    } );
    nextbutton.style.display ="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score}/${questions.length}!`;
    nextbutton.innerHTML = "play again";
    nextbutton.style.display = "block";
}
function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextbutton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextbutton();
    }else{
        StartQuiz();
    }
})

var timeLeft = 20;
var interval;
document.getElementById('next-btn').addEventListener('click',function(){
    startTimer();
});

function startTimer() {
 interval = setInterval(function() {
    document.getElementById('timer').innerHTML = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(interval);
      alert('Time is up!');
    }
 }, 2000);
}
StartQuiz();
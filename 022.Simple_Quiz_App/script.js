// questions array
let quiz = [
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Capital of India?",
    options: ["Mumbai", "Delhi", "Pune", "Goa"],
    answer: "Delhi"
  },
  {
    question: "5 x 2 = ?",
    options: ["10", "8", "6", "12"],
    answer: "10"
  }
];

let qIndex = 0;
let score = 0;

let question = document.getElementById("question");
let options = document.querySelectorAll(".option");
let nextBtn = document.getElementById("next");
let scoreText = document.getElementById("score");

// load question
function loadQuestion(){
  let current = quiz[qIndex];

  question.innerHTML = current.question;

  options.forEach((btn, i) => {
    btn.innerHTML = current.options[i];

    btn.onclick = function(){
      if(btn.innerHTML === current.answer){
        score++;
      }
    };
  });
}

loadQuestion();

// next button
nextBtn.addEventListener("click", function(){

  qIndex++;

  if(qIndex < quiz.length){
    loadQuestion();
  }else{
    question.innerHTML = "Quiz Finished!";
    document.querySelector(".options").style.display = "none";
    nextBtn.style.display = "none";

    scoreText.innerHTML = "Your Score: " + score;
  }

});
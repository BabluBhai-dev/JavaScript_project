let btn = document.getElementById("btn");
let input = document.getElementById("guess");
let result = document.getElementById("result");

// random number between 1 to 10

let randomNumber = Math.floor(Math.random()*10)+1;

btn.addEventListener("click",function(){
    let userGuess = Number(input.value);
     if(userGuess === randomNumber){
    result.innerHTML = "🎉 Correct!";
  }else if(userGuess > randomNumber){
    result.innerHTML = "📉 Too High!";
  }else{
    result.innerHTML = "📈 Too Low!";
  }
})
let input = document.getElementById("num");

let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", function(){

  let number = Number(input.value);
  let output = "";

  for(let i = 1; i <= 10; i++){
    output+=number + " x " + i + " = " + (number * i) + "<br>";
  }

  result.innerHTML = output;
});
let input = document.getElementById("year");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", function(){

  let birthYear = Number(input.value);
  let currentYear = new Date().getFullYear();

  let age = currentYear - birthYear;

  result.innerHTML = "Your Age is: " + age;
});
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){

  let colors = ["red", "blue", "green", "yellow", "pink", "purple", "orange"];

  let random = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[random];
});
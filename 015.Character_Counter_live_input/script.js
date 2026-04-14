let text = document.getElementById("text");
let count = document.getElementById("count");

text.addEventListener("input", function(){

  let length = text.value.length;

  count.innerHTML = length;

});
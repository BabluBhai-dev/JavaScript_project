let input = document.getElementById("inputText");

let output = document.getElementById("output")

input.addEventListener("input", function(){
    output.innerHTML = input.value;
});
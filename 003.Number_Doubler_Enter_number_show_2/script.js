let input = document.getElementById("num");
let button = document.getElementById("double");
let result = document.getElementById("result");

button.addEventListener("click",function(){
    let number = Number(input.value);//get input value
    let double = number*2;
    result.innerHTML = "Result: "+ double;
});
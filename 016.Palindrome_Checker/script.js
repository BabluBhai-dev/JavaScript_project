let input = document.getElementById("text");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", function(){
    let word = input.value.toLowerCase();

    let reversed = word.split("").reverse().join("");

    if(word=== reversed){
        result.innerHTML = "✅ Palindrome";
    }else{
        result.innerHTML="❌ Not Palindrome";
    }
});
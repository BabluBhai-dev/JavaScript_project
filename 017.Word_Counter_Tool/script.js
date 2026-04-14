let text = document.getElementById("text");

let words = document.getElementById("words");

let chars = document.getElementById("chars");

text.addEventListener("input", function(){
    let value = text.value.trim();

    // character count

    chars.innerHTML = value.length;

    // word count

    if(value === ""){
        words.innerHTML = 0;

    }else{
        let wordArray = value.split(" ");
        words.innerHTML = wordArray.length;
    }
});

let btn = document.getElementById("toggleBtn");
let text = document.getElementById("text");

btn.addEventListener("click", function(){
    if(text.style.display === "none"){
        text.style.display = "block";
        btn.innerHTML = "Hide";
    }else{
        text.style.display = "none";
        btn.innerHTML = "show";
    }
});
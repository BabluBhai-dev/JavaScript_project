let mainBtn = document.getElementById("mainBtn");

let disableBtn = document.getElementById("disablebtn");

let enableBtn = document.getElementById("enablebtn");

// disable button

disableBtn.addEventListener("click" , function(){
    mainBtn.disabled = true;
});

// enable button

enableBtn.addEventListener("click", function(){
    mainBtn.disabled = false;
});
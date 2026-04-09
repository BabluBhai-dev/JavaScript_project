let count =0;

let counts = document.getElementById("count");

let incre = document.getElementById("inc");

let decre = document.getElementById("dec");

// incerement

incre.addEventListener("click", function(){
    count=count+ 1 ;
    counts.innerHTML = count;
});

decre.addEventListener("click", function(){
    count=count-1 ;
    counts.innerHTML = count;
});


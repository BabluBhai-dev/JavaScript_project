let bill = document.getElementById("bill");
let tip = document.getElementById("tip");

let btn = document.getElementById("btn");

let result = document.getElementById("result");

btn.addEventListener("click", function(){
    let b = Number(bill.value);
    let t = Number(tip.value);

    let tipAmount = (b*t)/100;
    let total = b + tipAmount;

    result.innerHTML = "Tip: " + tipAmount.toFixed(2) + "<br>Total: "+ total.toFixed(2);
});
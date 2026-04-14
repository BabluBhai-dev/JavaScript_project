let num1 = document.getElementById("num1");

let num2 = document.getElementById("num2");

let addBtn = document.getElementById("add");

let addSub = document.getElementById("sub");

let result = document.getElementById("result");

// add

addBtn.addEventListener("click",function(){
    let sum = Number(num1.value) + Number(num2.value);

    result.innerHTML = "Result: " + sum;
});

// sub

addSub.addEventListener("click",function(){
    let sub = Number(num1.value)- Number(num2.value);
    result.innerHTML = "Result : " + sub;
});

 
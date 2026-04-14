let height = document.getElementById("height");
let weight = document.getElementById("weight");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click",function(){
    let h =Number(height.value);
    let w = Number(weight.value);

    let bmi = w/(h*h);

    let category = "";

    if(bmi<18.5){
        category = "underweight";
    }else if(bmi>= 18.5 && bmi <25){
        category = "Normal";
    }else{
        category = "Overweight";
    }

    result.innerhtML = "BMI: " + bmi.toFixed(2) + "(" +category +")";
});
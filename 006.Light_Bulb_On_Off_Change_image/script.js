let bulb = document.getElementById("bulb");

let btns = document.getElementById("btn");

let isOn = false;

btns.addEventListener("click", function(){
    if(isOn === false){
        bulb.src = "bulb-on.jpg";
        btns.innerHTML = "Turn OFF";
        isOn = true;
    }else{
        bulb.src = "bulb-off.png";
        btns.innerHTML = "Turn ON";
        isOn = false;
    }
});
let bulb = document.getElementById("bulb");

let btns = document.getElementById("btn");

let isOn = false;

btns.addEventListener("click", function(){
    if(isOn === false){
        bulb.src = "Image/bulb-on.jpg";
        btns.innerHTML = "Turn OFF";
        isOn = true;
    }else{
        bulb.src = "Image/bulb-off.jpg";
        btns.innerHTML = "Turn ON";
        isOn = false;
    }
});
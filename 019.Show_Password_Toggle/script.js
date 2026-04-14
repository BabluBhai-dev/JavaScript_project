let password = document.getElementById("password");

let toggle = document.getElementById("toggle");

toggle.addEventListener("click",function(){
    if(password.type === "password"){
        password.type = "text";
        toggle.innerHTML = "Hide";
    }else{
        password.type = "password";
        toggle.innerHTML = "Show";
    }
});
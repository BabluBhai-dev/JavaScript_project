let clock = document.getElementById("clock");

function updateClock(){
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // add leading ZERO (e.g. 09 instead of 9)
    if(hours<10) hours = "0" +hours;
    if(minutes<10) minutes = "0" + minutes;
    if(seconds <10) seconds = "0"+seconds;

     clock.innerHTML = hours + ":" + minutes + ":" + seconds;

}

// run every 1 second

setInterval(updateClock,1000);

//run immediately first time
updateClock();
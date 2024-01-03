function currentTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    let session = "AM";
    if(hours > 12){
        session= "PM";
    }
    if (hours < 10) {
        hours = "0" + hours ;
    }
    if (minutes<10){
        minutes="0"+minutes;
    }
    if (second<10){
        second="0"+second;
    }

    var time  = hours+":"+minutes+""+":"+second+ session;
    let clockDisplay = document.getElementById("MyClockDisplay");
    if (clockDisplay) {
        clockDisplay.innerText = time;
    }
    
    setTimeout(currentTime,1000)
}
currentTime();
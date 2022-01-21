function newClock() {
    setTimeout(function() {
        currentDate = new Date();
        hours = currentDate.getHours();
        minutes = currentDate.getMinutes();
        seconds = currentDate.getSeconds();
        seconds = seconds >= 10 ? `${seconds}` : `0${seconds}`;
        minutes = minutes >= 10 ? `${minutes}` : `0${minutes}`;
        hours = hours > 12 ? `${hours-12}` : `${hours}`;
        hours = hours >= 10 ? `${hours}` : `0${hours}`;
        customDate = `${hours}:${minutes}:${seconds}`;
        newClock();
        checkTime();
        document.getElementById('demo').innerHTML = customDate;
        playAlarm();
    }, 1000)
}

let a
let c
stop = 1


function checkTime() {
    a = document.getElementById("hoursSet").value;
    c = document.getElementById("minutesSet").value;
    checkAlarm();
}

function checkAlarm() {
if (a == hours && c == minutes) {
    stop = 0
    playAlarm();
    }
}

function playAlarm() {
    if (stop == 0) {
    document.getElementById("sound").play()
    }
}

function stopAlarm() {
    stop = 1
    document.getElementById('hoursSet').value = null
    document.getElementById('minutesSet').value = null
}

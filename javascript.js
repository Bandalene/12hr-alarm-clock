function newClock() {
    setTimeout(function() {
        currentDate = new Date();
        hours = currentDate.getHours();
        minutes = currentDate.getMinutes();
        seconds = currentDate.getSeconds();
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
string = seconds >= 10 ? `${seconds}` : `0${seconds}`;

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

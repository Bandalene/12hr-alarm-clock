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

var a
var c
stop = 1

function checkTime() {
    a = document.getElementById("hoursSet").value;
    c = document.getElementById("minutesSet").value;
    checkHour();
}

function checkHour() {
if (a == hours) {
    checkMinute();
    }
}
function checkMinute() {
    if (c == minutes) {
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

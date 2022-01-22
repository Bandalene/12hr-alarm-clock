let a
let b
let c
stop = 1
function newClock() {
    setTimeout(function() {
        currentDate = new Date();
        hours = currentDate.getHours();
        minutes = currentDate.getMinutes();
        seconds = currentDate.getSeconds();
        ampm = hours >= 12 ? 'P.M.' : 'A.M.';
        seconds = seconds >= 10 ? `${seconds}` : `0${seconds}`;
        minutes = minutes >= 10 ? `${minutes}` : `0${minutes}`;
        if (hours > 12 && hours - 12 < 10) {
            hours = `${hours-12}`;
            customDate = `0${hours}:${minutes}:${seconds}${ampm}`
        } else if (hours > 12) {
            hours = `${hours-12}`;
            customDate = `${hours}:${minutes}:${seconds}${ampm}`
        } else if (hours <= 12 && hours < 10) {
            customDate = `0${hours}:${minutes}:${seconds}${ampm}`
        } else if (hours <= 12) {
            customDate = `${hours}:${minutes}:${seconds}${ampm}`
        }
        newClock();
        checkTime();
        document.getElementById('demo').innerHTML = customDate;
        playAlarm();
    }, 1000)
}
function checkTime() {
    a = document.getElementById("hoursSet").value;
    b = document.getElementById("amPM").value
    c = document.getElementById("minutesSet").value;
    checkAlarm();
}
function checkAlarm() {
if (a == hours && c == minutes && b == ampm) {
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
    document.getElementById('amPM').value = "--"
}

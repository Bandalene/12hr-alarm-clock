let a
let c
stop = 1
function newClock() {
    setTimeout(function() {
        currentDate = new Date();
        hours = currentDate.getHours();
        minutes = currentDate.getMinutes();
        seconds = currentDate.getSeconds();
        seconds = seconds >= 10 ? `${seconds}` : `0${seconds}`;
        minutes = minutes >= 10 ? `${minutes}` : `0${minutes}`;
        if (hours > 12 && hours - 12 < 10) {
            hours = `${hours-12}`;
            customDate = `0${hours}:${minutes}:${seconds}pm`
        } else if (hours > 12) {
            hours = `${hours-12}`;
            customDate = `${hours}:${minutes}:${seconds}pm`
        } else if (hours <= 12 && hours - 12 < 10) {
            customDate = `0${hours}:${minutes}:${seconds}am`
        } else if (hours <= 12) {
            customDate = `${hours}:${minutes}:${seconds}am`
        }
        newClock();
        checkTime();
        document.getElementById('demo').innerHTML = customDate;
        playAlarm();
    }, 1000)
}
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

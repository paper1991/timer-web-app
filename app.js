var hours = 0
var hours = 0
var hours = 0

function hourUp() {
    var hour = document.getElementById("hour");
    hour.innerHTML = parseInt(hour.innerHTML) + 1;

    if (parseInt(hour.innerHTML) > 99) {
        hour.innerHTML = 0;
    }
}

function hourDown() {
    var hour = document.getElementById("hour");
    hour.innerHTML = parseInt(hour.innerHTML) - 1;

    if (parseInt(hour.innerHTML) < 0) {
        hour.innerHTML = 99;
    }
}

function minuteUp() {
    var minute = document.getElementById("minute");
    minute.innerHTML = parseInt(minute.innerHTML) + 1;

    if (parseInt(minute.innerHTML) > 59) {
        minute.innerHTML = 0;
    }
}

function minuteDown() {
    var minute = document.getElementById("minute");
    minute.innerHTML = parseInt(minute.innerHTML) - 1;

    if (parseInt(minute.innerHTML) < 0) {
        minute.innerHTML = 59;
    }
}

function secondUp() {
    var second = document.getElementById("second");
    second.innerHTML = parseInt(second.innerHTML) + 1;

    if (parseInt(second.innerHTML) > 59) {
        second.innerHTML = 0;
    }

}

function secondDown() {
    var second = document.getElementById("second");
    second.innerHTML = parseInt(second.innerHTML) - 1;

    if (parseInt(second.innerHTML) < 0) {
        second.innerHTML = 59;
    }
}
function startTimer() {
    var buttons = document.getElementsByTagName("button");

    for (var i = 0; i < buttons.length; i += 1) {
        buttons[i].style.display = "none";
    }
    hours = parseInt(document.getElementById("hour").innerHTML);
    minutes = parseInt(document.getElementById("minute").innerHTML);
    seconds = parseInt(document.getElementById("second").innerHTML);

    countdown();
}



function countdown() {
    seconds -= 1;
    document.getElementById("second").innerHTML = seconds;
}
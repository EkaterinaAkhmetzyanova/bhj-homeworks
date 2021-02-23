"use strict";
const timer = document.getElementById("timer");
const countdown = function() {
    timer.textContent -= 1;
    if (timer.textContent <= 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(intervalID);
    }
}
const intervalID = setInterval(countdown, 1000);
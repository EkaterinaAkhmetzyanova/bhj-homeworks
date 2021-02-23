"use strict";
const clicker = document.getElementById("clicker__counter");
const cookieImg = document.getElementById("cookie");

function cookieClicker() {
    clicker.textContent++ + 1;
    if (cookieImg.width === 200) {
        cookieImg.width = 300;
    } else {
        cookieImg.width = 200;
    }
}
cookieImg.onclick = cookieClicker;
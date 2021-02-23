"use strict";
const getHole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
for (let i = 1; i < 9; i++) {
    getHole(i).onclick = function() {
        if (this.className.includes("hole_has-mole")) {
            dead.textContent++;
            if (dead.textContent >= 10) {
                alert("Победа!");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            lost.textContent++;
            if (lost.textContent >= 5) {
                alert("Вы проиграли");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    }
}
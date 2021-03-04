"use strict";
const rotators = Array.from(document.querySelectorAll(".rotator"));
rotators.forEach(element => {
    const rotatorCase = Array.from(element.querySelectorAll(".rotator__case"));
    let counter = 0;

    function caseSwitcher() {
        rotatorCase[counter].classList.remove("rotator__case_active");
        if (counter === rotatorCase.length - 1) {
            counter = 0;
            rotatorCase[counter].classList.add("rotator__case_active");
            rotatorCase[rotatorCase.length - 1].classList.remove("rotator__case_active");
        } else {
            counter += 1;
            rotatorCase[counter].classList.add("rotator__case_active");

        }
    }
    setInterval(caseSwitcher, 1000);
})
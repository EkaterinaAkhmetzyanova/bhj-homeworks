"use strict";
let blocks = Array.from(document.querySelectorAll(".reveal"));
blocks.forEach(element => {
    function isInViewport() {
        const viewportHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < viewportHeight && elementTop > 0 || elementBottom > 0) {
            element.classList.add("reveal_active");
        } else {
            element.classList.remove("reveal_active");
        }
    }
    window.addEventListener("scroll", isInViewport);
})
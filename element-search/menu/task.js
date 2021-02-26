"use strict";
const menuLink = Array.from(document.querySelectorAll(".menu__link"));
for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function() {
        const parentLink = menuLink[i].closest(".menu__item");
        const activeLink = Array.from(document.querySelectorAll(".menu_active"));
        if (parentLink.querySelector(".menu_sub") != 0) {
            parentLink.querySelector(".menu_sub").className = parentLink.querySelector(".menu_sub").className + " menu_active";
            if (activeLink.length != 0) {
                for (let j = 0; j < activeLink.length; j++) {
                    activeLink[j].className = "menu menu_sub";
                }
            }
            return false;
        }
    }
}
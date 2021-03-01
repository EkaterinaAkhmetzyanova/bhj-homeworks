"use strict";
const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");

function dropdownCheck() {
    if (dropdownList.className.includes("dropdown__list dropdown__list_active") === true) {
        dropdownList.classList.remove("dropdown__list_active");
    } else {
        dropdownList.classList.add("dropdown__list_active");
    }
}

dropdownValue.addEventListener("click", dropdownCheck);

const dropdownItem = Array.from(document.querySelectorAll(".dropdown__item"));

dropdownItem.forEach(element => {
    function dropdownLink(e) {
        let event = e.target;
        if (dropdownList.className.includes("dropdown__list dropdown__list_active") === true) {
            dropdownValue.textContent = event.textContent;

        }
        dropdownList.classList.remove("dropdown__list_active");
        e.preventDefault();
    }
    element.addEventListener("click", dropdownLink);
})
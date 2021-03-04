"use strict";
const fontSizes = Array.from(document.querySelectorAll(".font-size"));
const bookContent = document.querySelector(".book__content");


for (let i = 0; i < fontSizes.length; i++) {
    const fontSize = fontSizes[i];

    function fontSizeChanging(event) {
        const activeFontSize = document.querySelector(".font-size_active");
        activeFontSize.classList.remove("font-size_active");
        event.target.classList.add("font-size_active");
        if (fontSize.classList.contains("font-size_big") === true) {
            bookContent.className = "book book_fs-big";
        } else if (fontSize.classList.contains("font-size_small") === true) {
            bookContent.className = "book book_fs-small";
        } else {
            bookContent.className = "book";
        }
        event.preventDefault();
    }
    fontSize.addEventListener("click", fontSizeChanging);
}
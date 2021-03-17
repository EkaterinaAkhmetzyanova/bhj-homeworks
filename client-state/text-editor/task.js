"use strict";
const editor = document.getElementById("editor");

function addLocalStorage() {
    localStorage.setItem("text", editor.value);
}

window.onload = function() {
    editor.value = localStorage.getItem("text");
}

document.addEventListener("keydown", addLocalStorage);
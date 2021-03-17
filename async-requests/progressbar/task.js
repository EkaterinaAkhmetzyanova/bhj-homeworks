"use strict";
let progress = document.getElementById("progress");
let form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.upload.onprogress = function(e) {
        progress.value = e.loaded / e.total;
    }
    xhr.send(formData);
})
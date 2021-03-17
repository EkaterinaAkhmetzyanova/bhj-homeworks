"use strict";
const signin = document.getElementById("signin");
const form = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const userID = document.getElementById("user_id");

window.addEventListener("load", function() {
    if (localStorage.user_id === undefined) {
        signin.classList.add("signin_active");
    } else {
        welcome.classList.add("welcome_active");
        userID.textContent = localStorage.user_id;
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let answer = JSON.parse(xhr.responseText);
            if (answer.success === true) {
                localStorage.user_id = answer.user_id;
                welcome.classList.add("welcome_active");
                signin.classList.remove("signin_active");
                userID.textContent = localStorage.user_id;
            } else if (answer.success === false) {
                alert("Неверный логин/пароль");
            }
        }
    };
});
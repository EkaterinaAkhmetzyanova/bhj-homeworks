"use strict";
const question = document.getElementById("poll__title");
const answersButtons = document.getElementById("poll__answers");
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let answer = JSON.parse(xhr.responseText);
        let data = answer.data;
        let title = data.title;
        let answers = data.answers;
        question.innerText = title;
        answers.forEach(element => {
            answersButtons.innerHTML += `
            <button class="poll__answer">
            ${element}
          </button>
            `;
        })
        answers = Array.from(document.querySelectorAll(".poll__answer"));
        answers.forEach(element => {
            element.addEventListener("click", () => { alert("Спасибо, ваш голос засчитан!") });
        })
    }
}
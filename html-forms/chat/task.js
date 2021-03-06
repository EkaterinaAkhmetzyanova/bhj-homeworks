"use strict";
const chatButton = document.querySelector(".chat-widget");
chatButton.addEventListener("click", function() {
    chatButton.classList.add("chat-widget_active");
})

const messages = document.querySelector(".chat-widget__messages");
const messageInput = document.getElementById("chat-widget__input");

function keydownEnter(e) {
    if (e.keyCode === 13) {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        let time;
        if (minutes < 10) {
            time = `${hours}:0${minutes}`;
        } else {
            time = `${hours}:${minutes}`;
        }

        const clientMessages = messageInput.value;
        const robotMessages = [
            "Добрый день! Что надо?",
            "К счастью, все операторы заняты",
            "Может обратитесь в другой магазин?",
            "Больше ничего не хотите?",
            "Перезвоните нам позже или никогда",
            "Спасибо, что обратились в наш магазин. До свидания!"
        ];

        const i = Math.floor(Math.random() * (robotMessages.length - 1));

        if (clientMessages != "") {
            messages.innerHTML +=
                `<div class = "message message_client"> 
                <div class = "message__time">${time}</div>  
                <div class = "message__text">${clientMessages}</div>  
            </div >`;
            messages.innerHTML +=
                `<div class = "message"> 
                <div class = "message__time">${time}</div>  
                <div class = "message__text">${robotMessages[i]}</div>  
            </div >`;
        }
        messageInput.value = "";
    }
}

messageInput.addEventListener("keydown", keydownEnter);
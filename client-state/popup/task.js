"use strict";
const close = document.querySelector(".modal__close");
const subscribeModal = document.getElementById("subscribe-modal");

function closeModal() {
    subscribeModal.classList.remove("modal_active");
    document.cookie = "window=close";
}

window.addEventListener("load", function() {
    const getCookie = (name) => {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts.length !== 2) {
            subscribeModal.classList.add("modal_active");
        }
    }
    getCookie("window");
});

close.addEventListener("click", closeModal);
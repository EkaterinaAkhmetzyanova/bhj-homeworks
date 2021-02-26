"use strict";
const mainModal = document.getElementById("modal_main");
mainModal.className = mainModal.className + " modal_active";
const closeButton = document.getElementsByClassName("modal__close");
for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
        closeButton[i].closest(".modal").className = "modal";
    }
}
const showSuccess = document.getElementsByClassName("show-success");
const successModal = document.getElementById("modal_success");
showSuccess.item(0).onclick = function() {
    mainModal.className = "modal";
    successModal.className = successModal.className + " modal_active";
}
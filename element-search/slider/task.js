"use strict";
const slides = Array.from(document.getElementsByClassName("slider__item"));
const nextSlideBtn = document.querySelector(".slider__arrow_next");
const prevSlideBtn = document.querySelector(".slider__arrow_prev");

function checkNextSlide() {
    for (let i = 0; i < slides.length; i++) {
        let slide = slides[i];
        if (slide.className.includes("slider__item slider__item_active") === true) {
            slide.className = "slider__item";
            slides[i + 1].className = "slider__item slider__item_active";
            break;
        }
        if (i === slides.length - 2) {
            slide = slides[0];
            slide.className = "slider__item slider__item_active";
            slides[i + 1].className = "slider__item";
        }
    }
}

nextSlideBtn.onclick = function() {
    checkNextSlide();
}

function checkPrevSlide() {
    for (let i = slides.length - 1; i >= 0; i--) {
        let slide = slides[i];
        if (slide.className.includes("slider__item slider__item_active") === true) {
            slide.className = "slider__item";
            slides[i - 1].className = "slider__item slider__item_active";
            break;
        }
        if (i === 1) {
            slide = slides[slides.length - 1];
            slide.className = "slider__item slider__item_active";
            slides[i - 1].className = "slider__item";
        }
    }
}

prevSlideBtn.onclick = function() {
    checkPrevSlide();
}
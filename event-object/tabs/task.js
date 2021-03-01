"use strict";
const tabs = Array.from(document.getElementsByClassName("tab"));
const tabsContent = Array.from(document.getElementsByClassName("tab__content"));
tabs.forEach(element => {
    function tabsSwitcher() {
        let activeTabs = document.querySelectorAll(".tab_active");
        let activeContent = document.querySelectorAll(".tab__content_active");
        let index = tabs.indexOf(element);
        element.classList.add("tab_active");
        tabsContent[index].classList.add("tab__content_active");
        if (activeTabs.length != 0 && activeContent.length != 0) {
            activeTabs[0].classList.remove("tab_active");
            activeContent[0].classList.remove("tab__content_active");
        }
    }
    element.addEventListener("click", tabsSwitcher);
})
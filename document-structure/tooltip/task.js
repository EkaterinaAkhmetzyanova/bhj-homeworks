"use strict";
const tooltipElements = Array.from(document.querySelectorAll(".has-tooltip"));
let activeTooltip = null;
for (let i = 0; i < tooltipElements.length; i++) {
    const tooltipElement = tooltipElements[i];
    tooltipElement.addEventListener("click", showTip);

    function showTip(event) {
        if (activeTooltip !== null) {
            activeTooltip.classList.remove("tooltip_active");
            return false;
        }
        const title = event.target.getAttribute("title");
        const tooltipDiv = document.createElement("div");
        tooltipDiv.className = "tooltip";
        tooltipElement.insertAdjacentElement("afterend", tooltipDiv);
        tooltipDiv.innerText = title;
        tooltipDiv.classList.add("tooltip_active");
        activeTooltip = document.querySelector(".tooltip");
        tooltipDiv.style.top = event.target.getBoundingClientRect().top + 20 + "px";
        tooltipDiv.style.left = event.target.getBoundingClientRect().left + "px";
        event.preventDefault();
    }

}
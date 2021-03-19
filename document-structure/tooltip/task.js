"use strict";
const tooltipElements = Array.from(document.querySelectorAll(".has-tooltip"));
let activeTooltip = null;
for (let i = 0; i < tooltipElements.length; i++) {
    const tooltipElement = tooltipElements[i];
    tooltipElement.addEventListener("click", showTip);

    function showTip(event) {
        const title = event.target.getAttribute("title");
        if (activeTooltip !== null) {
            activeTooltip.classList.remove("tooltip_active");
            activeTooltip = null;
            event.preventDefault();
            return false;
        }
        const tooltipDiv = document.createElement("div");
        tooltipDiv.className = "tooltip";
        tooltipDiv.innerText = title;
        tooltipElement.insertAdjacentElement("afterend", tooltipDiv);
        tooltipDiv.classList.add("tooltip_active");
        activeTooltip = document.querySelector(".tooltip_active");
        tooltipDiv.style.top = event.target.getBoundingClientRect().top + 20 + "px";
        tooltipDiv.style.left = event.target.getBoundingClientRect().left + "px";
        event.preventDefault();
    }

}
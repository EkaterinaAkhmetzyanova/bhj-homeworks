"use strict";
const tooltipElements = document.querySelectorAll(".has-tooltip");
for (let i = 0; i < tooltipElements.length; i++) {
    const tooltipElement = tooltipElements[i];

    function tipReveal(e) {
        const activeTooltip = null;
        const event = e.target;
        const title = event.getAttribute("title");
        if (activeTooltip != null && activeTooltip.innerText === title) {
            activeTooltip.remove();
            activeTooltip = null;
            return false;
        } else if (activeTooltip != null) {
            activeTooltip.remove();
        }
        const tooltipDiv = document.createElement("div");
        tooltipDiv.className = "tooltip tooltip_active";
        tooltipDiv.innerText = title;
        tooltipElement.insertAdjacentElement("afterend", tooltipDiv);
        e.preventDefault();
    }
    tooltipElement.addEventListener("click", tipReveal);
}
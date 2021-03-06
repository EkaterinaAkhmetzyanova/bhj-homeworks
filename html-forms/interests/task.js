"use strict";
const interests = Array.from(document.querySelectorAll(".interests_active"));
for (let i = 0; i < interests.length; i++) {
    const interest = interests[i];
    const subinterestParents = interest.closest(".interest");
    const checkbox = subinterestParents.firstElementChild.firstElementChild;

    function isChecked() {
        const subinterests = interest.children;
        for (let j = 0; j < subinterests.length; j++) {
            const subinterest = subinterests[j];
            const subcheckbox = subinterest.firstElementChild.firstElementChild;
            subcheckbox.checked = checkbox.checked;
        }
    }
    checkbox.addEventListener("change", isChecked);
}
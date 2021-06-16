"use strict";

// * assign all the panel to a single const variable
const panels = document.querySelectorAll(".panel");

// * loop through the panels, adding an event listener to all
// * and reacting to clicks
panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.toggle("active");
    });
});

const removeActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
        panel.classList.add("inactive");
    });
};

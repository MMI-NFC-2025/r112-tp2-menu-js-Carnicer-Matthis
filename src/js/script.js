const nav = document.querySelector("nav.menu");
const toggle = document.querySelector("button.menu-btn");

toggle.addEventListener("click", () => {
    nav.ariaHidden = "false";
    toggle.ariaExpanded = "true";
});
//Select the hamburger menu and nav-wrapper ul and store in variables
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-wrapper");
//Add click event to add the active class to the hamburger and nav-wrapper ul menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
//Add click event to close the menu when an item is selected by removing active class
document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
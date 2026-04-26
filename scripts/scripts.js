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


//Function for switching between login and signup forms 
function switchTab(evt, tabId) {
    // Hide all tab content
    document.querySelectorAll('.form-content, .tab').forEach(el => el.classList.remove('active')); 
    // Show current tab content
    document.getElementById(tabId).classList.add('active');
    // Make button active
    evt.currentTarget.classList.add('active');
}

//Event listeners on click for each tab when clicked
document.getElementById('signupBtn').addEventListener('click', (e) => switchTab(e, 'sign-up'));
document.getElementById('loginBtn').addEventListener('click', (e) => switchTab(e, 'login'));

//Trying to create the read more function 
function toggleText(btn) {
  const container = btn.parentElement;
  const moreText = container.querySelector(".more");
  const dots = container.querySelector(".dots");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btn.innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.innerHTML = "Read More";
  }
}

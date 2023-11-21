const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});


/* This is the menu */

/*function toggleMenu() {
  document.getElementById("topNav").classList.toggle ("open")
  ("open")
} */

let x = document.getElementById('hamburgerBtn');
  x.onclick = toggleMenu;



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

function myFunction() {
  var x = document.getElementById("topNav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction() {
var x = document.getElementById("myLinks");
if (x.style.display === "block") {
  x.style.display = "none";
} else {
  x.style.display = "block";
}
}

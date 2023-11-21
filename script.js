const toggleMenu = document.getElementById('toggle-menu');
const mainMenu = document.getElementById('myTopnav');

toggleMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
});


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



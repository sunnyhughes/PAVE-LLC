const toggleMenu = document.getElementById('toggle-menu');
const mainMenu = document.getElementById('myTopnav');

toggleMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
});


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

/* 
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const firstNameRegex = /^[a-zA-Z]+$/;
const lastNameRegex = /^[a-zA-Z]+$/;
const genderRegex = /^(male|female)$/;
const zipCodeRegex = /^\d{5}$/;
const neighborhoodRegex = (california|parkland|parkhill|russell|newburg|smoketown);
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
const emailRegex = /^[\w-]+@[\w-]+.[a-zA-Z]+$/;
const commentsRegex = /.+/;

const form = document.getElementById('contact-form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const genderInput = document.getElementById('gender');
const zipCodeInput = document.getElementById('zipCode');
const neighborhoodInput = document.getElementById('neighborhood');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const commentsInput = document.getElementById('comments');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  // Validate First Name
  if (!firstNameRegex.test(firstNameInput.value)) {
    errorMessage.textContent = 'Please enter a valid first name';
    firstNameInput.focus();
    isValid = false;
  }

  // Validate Last Name
  if (!lastNameRegex.test(lastNameInput.value)) {
    errorMessage.textContent = 'Please enter a valid last name';
    lastNameInput.focus();
    isValid = false;
  }

  // Validate Gender
  if (!genderRegex.test(genderInput.value)) {
    errorMessage.textContent = 'Please select a gender';
    genderInput.focus();
    isValid = false;
  }

  // Validate Zip Code
  if (!zipCodeRegex.test(zipCodeInput.value)) {
    errorMessage.textContent = 'Please enter a valid zip code';
    zipCodeInput.focus();
    isValid = false;
  }

  // Validate Neighborhood
  if (!neighborhoodRegex.test(neighborhoodInput.value)) {
    errorMessage.textContent = 'Please select a neighborhood';
    neighborhoodInput.focus();
    isValid = false;
  }

  // Validate Phone Number
  if (!phoneRegex.test(phoneInput.value)) {
    errorMessage.textContent = 'Please enter a valid phone number';
    phoneInput.focus();
    isValid = false;
  }

  // Validate Email Address
  if (!emailRegex.test(emailInput.value)) {
    errorMessage.textContent = 'Please enter a valid email address';
    emailInput.focus();
    isValid = false;
  }

  // Validate Comments
  if (!commentsRegex.test(commentsInput.value)) {
    errorMessage.textContent = 'Please enter some comments';
    commentsInput.focus();
    isValid = false;
  }

  if (isValid) {
    // Submit the form data to the server
  }
});


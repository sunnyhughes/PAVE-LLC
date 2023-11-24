const toggleMenu = document.getElementById('toggle-menu');
const mainMenu = document.getElementById('myTopnav');

toggleMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
});



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Contact Form Regex Area */

const fullNameInput = document.getElementById('fullNameInput');
const phoneInput = document.getElementById('phoneInput');
const emailInput = document.getElementById('emailInput');

const nameRegex = /^[a-zA-Z]+$/;
const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
const emailRegex = /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\.([a-zA-Z]{2,5})$/;

const validateFirstName = () => {
  if (!nameRegex.test(fullNameInput.value)) {
    fullNameInput.classList.add('error');
    fullNameInput.nextElementSibling.textContent = 'Invalid full name format';
  } else {
    fullNameInput.classList.remove('error');
    fullNameInput.nextElementSibling.textContent = '';
  }
};

const validatePhone = () => {
  if (!phoneRegex.test(phoneInput.value)) {
    phoneInput.classList.add('error');
    phoneInput.nextElementSibling.textContent = 'Invalid phone number format';
  } else {
    phoneInput.classList.remove('error');
    phoneInput.nextElementSibling.textContent = '';
  }
};

const validateEmail = () => {
  if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add('error');
    emailInput.nextElementSibling.textContent = 'Invalid email format';
  } else {
    emailInput.classList.remove('error');
    emailInput.nextElementSibling.textContent = '';
  }
};

fullNameInput.addEventListener('blur', validateFullName);
phoneInput.addEventListener('blur', validatePhone);
emailInput.addEventListener('blur', validateEmail);

const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'],
    datasets: [
      {
        label: 'My Dataset',
        data: [10, 20, 30, 40, 50, 60],
      },
    ],
  },
});


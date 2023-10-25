// This is original javascript for the contact form //

let genderValue = male.checked ? "male" : "female"
document.querySelector('input[name="gender"]:checked')

function getGender() {
    return document.querySelector('input[name="gender"]:checked')
}

var fields = {

    document.addEventListener("DOMContentLoaded", function() {
        fields.firstName = document.getElementById('firstName');
        fields.lastName = document.getElementById('lastName');
        fields.email = document.getElementById('email');
        fields.address = document.getElementById('address');
        fields.neighborhood = document.getElementById('neighborhood');
        fields.newsletter = document.getElementById('newsletter');
        fields.comments = document.getElementById('comments');
       })

};

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
   }   

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

validationFunction(field.value)

if (!isFieldValid) {
    field.className = 'placeholderRed';
} else {
    field.className = '';

}

function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.gender, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.address, isNotEmpty);
    valid &= fieldValidation(fields.neighborhood, isNotEmpty);
    valid &= fieldValidation(fields.comments, isNotEmpty);
    valid &= arePasswordsEqual();
   
    return valid;
   }

class User {
    constructor(firstName, lastName, gender, address, neighborhood, email, newsletter, comments) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.address = address;
    this.neighborhood = neighborhood;
    this.email = email;
    this.newsletter = newsletter;
    this.comments = comments;
    }
   }

function sendContact() {
    fields.gender = getGender();

    if (isValid()) {
    let usr = new User(firstName.value, lastName.value, fields.gender.value, address.value, neighborhood.value, email.value, newsletter.checked, comments.value);

    alert(`${usr.firstName} thanks for registering.`)

    } else {
    alert("There was an error")
    }
}

// This is php form data & validation script constructs //

   const constraints = {
       firstName: {
           presence: { allowEmpty: false }
       },
       lastName: {
            presence: { allowEmpty: false }
       },
       gender: {
        presence: { allowEmpty: false }
       },
        email: {
        presence: { allowEmpty: false },
        email: true
       },
       address: {
        presence: { allowEmpty: false }
        },
        neighborhood: {
            presence: { allowEmpty: false }
       },
       newsletter: {
            presence: { allowEmpty: true }
       },
        comments: {
           presence: { allowEmpty: true }
       }
   };

   const form = document.getElementById('contact-form');

   form.addEventListener('submit', function (event) {
     const formValues = {
         firstName: form.elements.name.value,
         lastName: form.elements.lastname.value,
         gender: form.elements.gender.value,
         email: form.elements.email.value,
         address: form.elements.address.value,
         neighborhood: form.elements.neighborhood.value,
         newsletter: form.elements.newsletter.value,
         comments: form.elements.comments.value
     };

     const errors = validate(formValues, constraints);

     if (errors) {
       event.preventDefault();
       const errorMessage = Object
           .values(errors)
           .map(function (fieldValues) { 
                return fieldValues.join(', ')})
           .join("\n");

       alert(errorMessage);
     }
   }, false);

   function onRecaptchaSuccess () {
    document.getElementById('contact-form').submit()
}


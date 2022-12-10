const form = document.querySelector("#contactForm");
const message = document.querySelector("#message");

// Name
const adress = document.querySelector("#adress");
const nameError = document.querySelector("#nameError");
// Email
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
// Message
const formMessage = document.querySelector("#formMessage");
const formMessageError = document.querySelector("#formMessageError");


// If all inputs pass or fail while submitting the contact form
function passTheForm() {
   let error = false;

    // Name
    if (length(adress.value, "") === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "unset";
        error = true;
    }

    // Email
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "unset";
        error = true;
    }

    // Message
    if (length(formMessage.value, 24) === true) {
        formMessageError.style.display = "none";
    } else {
        formMessageError.style.display = "unset";
        error = true;
    }

    return error;

} 

// When contact form is submitted after required input fields are filled in 
function submitForm(event) {
    event.preventDefault();
    const errors = passTheForm();

    if(!errors) {
        message.innerHTML = '<div class="message">Thank you for your message! I will come back to you as soon as possible.</div>';
    } 

    // Retain inputted text after submit, unless we change it or refresh the page
    form.focus();
}

form.addEventListener("submit", submitForm);

function length(value, len) {
    if (value.trim().length > len) {
        return true;
    }   else {
        return false;
    }
}

// Email validation controller inside the contact form (email-input)
function validateEmail(email) {
    const reg = /\S+@\S+\.\S+/;
    const patternMatches = reg.test(email);
    return patternMatches;
}
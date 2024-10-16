// Function to validate the name input field
function validateName() {
  // Get the element to display error messages for the name input
  var nameErr = document.getElementById('name-error');
  // Initialize a flag to track if the name is valid
  var validName = true;

  // Get the value of the name input and remove leading/trailing whitespace
  var Cname = document.getElementById('ContactName').value.trim();

  // Check if the name is empty
  if (Cname.length === 0) {
    // Display an error message if the name is empty
    nameErr.innerHTML = 'Name is required';
    // Set the flag to indicate the name is not valid
    validName = false;
  } else if (!Cname.match(/^[A-Za-z]+\s+[A-Za-z]+$/)) {
    // Check if the name consists of both first and last names separated by a space
    nameErr.innerHTML = 'Enter both first and last name';
    // Set the flag to indicate the name is not valid
    validName = false;
  } else {
    // Display a success icon if the name is valid
    nameErr.innerHTML = '<i class="bi bi-shield-fill-check"></i>';
  }

  // Return the validity of the name
  return validName;
}

// Function to validate the phone number input field
function validatePhone() {
  // Get the element to display error messages for the phone number input
  var phoneErr = document.getElementById('phone-error');
  // Initialize a flag to track if the phone number is valid
  var validPhone = true;

  // Get the value of the phone number input and remove leading/trailing whitespace
  var PhoneNo = document.getElementById('PhoneNumber').value.trim();

  // Check if the phone number is empty
  if (PhoneNo.length === 0) {
    // Display an error message if the phone number is empty
    phoneErr.innerHTML = 'Phone number is required';
    // Set the flag to indicate the phone number is not valid
    validPhone = false;
  } else if (!PhoneNo.match(/^\+?\d{1,2}\s?\d{3}\s?\d{3}\s?\d{4}$/)) {
    // Check if the phone number matches the required format
    phoneErr.innerHTML = 'Invalid phone number';
    // Set the flag to indicate the phone number is not valid
    validPhone = false;
  } else {
    // Display a success icon if the phone number is valid
    phoneErr.innerHTML = '<i class="bi bi-shield-fill-check"></i>';
  }

  // Return the validity of the phone number
  return validPhone;
}

// Function to validate the email input field
function validateEmail() {
  // Get the element to display error messages for the email input
  var emailErr = document.getElementById('email-error');
  // Initialize a flag to track if the email is valid
  var validEmail = true;

  // Get the value of the email input and remove leading/trailing whitespace
  var EmailId = document.getElementById('Email').value.trim();

  // Check if the email is empty
  if (EmailId.length === 0) {
    // Display an error message if the email is empty
    emailErr.innerHTML = 'Email is required';
    // Set the flag to indicate the email is not valid
    validEmail = false;
  } else if (!EmailId.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)) {
    // Check if the email matches the required format
    emailErr.innerHTML = 'Invalid email address';
    // Set the flag to indicate the email is not valid
    validEmail = false;
  } else {
    // Display a success icon if the email is valid
    emailErr.innerHTML = '<i class="bi bi-shield-fill-check"></i>';
  }

  // Return the validity of the email
  return validEmail;
}

// Function to validate the message input field
function validateMessage() {
  // Get the element to display error messages for the message input
  var MessageErr = document.getElementById('message-error');
  // Get the value of the message input and remove leading/trailing whitespace
  var ContactMessage = document.getElementById('Message').value.trim();
  // Define the required minimum length for the message
  var required = 30;
  // Calculate the number of characters left to reach the required length
  var left = required - ContactMessage.length;
  // Initialize a flag to track if the message is valid
  var validMessage = true;

  // Check if the message length is less than the required length
  if (left > 0) {
    // Display a message indicating the remaining characters required
    MessageErr.innerHTML = left + ' more characters required';
    // Set the flag to indicate the message is not valid
    validMessage = false;
  } else {
    // Display a success icon if the message is valid
    MessageErr.innerHTML = '<i class="bi bi-shield-fill-check"></i>';
  }

  // Return the validity of the message
  return validMessage;
}

// Function to validate the form submission
function validateSubmit() {
  // Get the element to display error messages for the submission
  var SubmitErr = document.getElementById('Submit-error');

  // Check if any of the input fields are invalid
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    // Display an error message if any input field is invalid
    SubmitErr.style.display = 'block';
    SubmitErr.innerHTML = "Please fix errors to submit";
    // Hide the error message after 3 seconds
    setTimeout(function () { SubmitErr.style.display = 'none'; }, 3000);
    // Prevent form submission
    return false;
  }
}

const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone_number');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password')

firstName.addEventListener('input', (event) => {
	if (firstName.validity.valueMissing) {
		firstName.setCustomValidity("Please, enter a First Name");
		firstName.reportValidity();
	} else if (firstName.validity.patternMismatch) {
		firstName.setCustomValidity("Only LATIN Uppercase and Lowercase Letters, Numbers, Characters '-', ' ', '/' ");
		firstName.reportValidity();
	} else {
		firstName.setCustomValidity("");
	}
});

lastName.addEventListener('input', (event) => {
	if (lastName.validity.valueMissing) {
		lastName.setCustomValidity("Please, enter a First Name");
		lastName.reportValidity();
	} else if (lastName.validity.patternMismatch) {
		lastName.setCustomValidity("Only LATIN Uppercase and Lowercase Letters, Numbers, Characters '-', ' ', '/' ");
		lastName.reportValidity();
	} else {
		lastName.setCustomValidity("");
	}
});

email.addEventListener('input', (event) => {
	if (email.validity.valueMissing) {
		email.setCustomValidity("Please, enter an Email");
		email.reportValidity();
	} else if (email.validity.typeMismatch) { // be attentive: must be 'typeMismatch' for <input type="email>"
		email.setCustomValidity("Entered value needs to be an Email");
		email.reportValidity();
	} else {
		email.setCustomValidity("");
	}
});

phoneNumber.addEventListener('input', (event) => {
	if (phoneNumber.validity.valueMissing) {
		phoneNumber.setCustomValidity("Please, enter a Phone Number");
		phoneNumber.reportValidity();
		
	} else if (phoneNumber.validity.patternMismatch) {
		phoneNumber.setCustomValidity("Phone Number needs to be in International Standart, without '+'");
		phoneNumber.reportValidity();
	} else {
		phoneNumber.setCustomValidity("");
	}
});

password.addEventListener('input', (event) => {
	if (password.validity.valueMissing) {
		password.setCustomValidity("Please, enter a Password");
		password.reportValidity();
	} else if (password.validity.patternMismatch) {
		password.setCustomValidity("At least 8 characters, min 1 Uppercase 1 Lowercase 1 Number 1 Special Characters");
		password.reportValidity();
	} else {
		password.setCustomValidity("");
	}
});

confirmPassword.addEventListener('input', (event) => {
	if (confirmPassword.validity.valueMissing) {
		confirmPassword.setCustomValidity("Please, enter the Confirm Password");
		confirmPassword.reportValidity();
	} else if (confirmPassword.validity.patternMismatch) {
		confirmPassword.setCustomValidity("At least 8 characters, min 1 Uppercase 1 Lowercase 1 Number 1 Special Characters");
		confirmPassword.reportValidity();
	} else {
		confirmPassword.setCustomValidity("");
	}
});
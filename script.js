const form = document.getElementById('form');			//Calls per ID inputs. (I will add submit later)
const username = document.getElementById('username');
const password = document.getElementById('password');
const login = document.getElementById('login');

form.addEventListener('submit', e => {		//Event for submit
	e.preventDefault();	//Stopping default behaviour.
	
	checkInputs();		//Checking Inputa.
});

function checkInputs() {	//Funkction for check and subtract values from input.
	const usernameValue = username.value.trim();	/*value from above*/
	const passwordValue = password.value.trim();	/*trim value for removal of empty spaces from strings. (ie. when user press space - it won't be allowed.)*/
	const loginValue = password.value.trim();

	//Username:	
    if(usernameValue === 'new_user') {	/* If the input field...*/
		setSuccessFor(username, 'Valid username has been entered.'); // Success conditions.
		console.log(usernameValue);
    } else if (usernameValue === '') {
		setErrorFor(username, 'Please, enter username');	// Error conditions.
		console.log(usernameValue);
    } else {
		setErrorFor(username, 'Please, enter valid username.');
		console.log(usernameValue);
    }


	//Password:
	if(passwordValue === '123456789') {
		setSuccessFor(password, 'Valid password has been entered.');
		console.log(passwordValue);
    } else if (passwordValue === '') {
		setErrorFor(password, 'Please, enter password');
		console.log(passwordValue);
    } else {
		setErrorFor(password, 'Please, enter valid password.');
		console.log(passwordValue);
    }


	//Login:

    if(usernameValue === 'new_user' && passwordValue === '123456789') {
		setSuccessFor(login, '*Successful Login!'); 	// Success Conditions
		console.log(usernameValue, passwordValue);

    } else if (usernameValue === '') {
		setErrorFor(login, 'Please, enter username');	// Error Conditions.
		console.log(usernameValue);

    } else if (usernameValue !== 'new_user'){
		setErrorFor(login, 'Please, enter valid username.');
		console.log(usernameValue);
    }	

	  else if (passwordValue === '') {
		setErrorFor(login, 'Please, enter password');
		console.log(passwordValue);
    } 
	
	  else if (passwordValue !== '123456789') {
		setErrorFor(login, 'Please, enter valid password.');
		console.log(passwordValue);
    }

	  else {
		setErrorFor(login, 'Unsuccessful Login!');
		console.log(usernameValue, passwordValue);
	}

}

// Error Functions:
function setErrorFor(input, message) {					// Errors for input and message.
	const formControl = input.parentElement;			// For .form-control.
	const small = formControl.querySelector('small');	// Also fro error:
	small.innerText = message;							// Because i ant to add error message inside the 'small'.

	formControl.className = 'form-control error'; // Adding dynamic error class.(this is why I have added dynamic classes for success and error ub html along 'form-control' class).
}

// Success Functions:
function setSuccessFor(input, message) {				// For Input like above - aimed form-control.
	const formControl = input.parentElement;			// Same for formControl success.
	const small = formControl.querySelector('small');	// Ad also for success.
	small.innerText = message;							// For success messages within small.	
	formControl.className = 'form-control success'; 	// Adding Success dynamic classes.
}
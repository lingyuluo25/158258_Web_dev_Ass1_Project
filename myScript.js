// myScript.js

// Student Name: Lingyu Luo 

// Student ID :24023295

// Login Section

//Check if there's a name and password stored in localStorage, handle error, and display the login msg;

function loginEvent() {
    let loginMsg ='';
	try {
		let username = document.getElementById("username").value;
		let password = document.getElementById("password").value;

		if (username === 'Lynn' && password === '1234') {
			loginMsg = 'Login successful!';
		} else if (username === '' && password === '') {
			loginMsg = '';
		} else {
			loginMsg = 'Error: Incorrect username or password.';
		}
	} catch (err){
		console.error('An error occurred during login:', err.message);
		loginMsg.textContent = 'An unexpected error occurred. Please try again.';
	} finally {
		console.log(loginMsg);
	}

    //The localStorage saves the login msg;
    localStorage.setItem("msg", loginMsg);

    //Display message on the webpage
    document.getElementById("msg").textContent = loginMsg;
}

//Reset the login msg to blank when user reflesh the page.

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("msg").textContent = '';
    if (localStorage.getItem("msg")) {
        document.getElementById("msg").textContent = localStorage.getItem("msg");
    }
});

// Check if there's a msg stored in localStorage
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("msg")) {
        document.getElementById("msg").textContent = localStorage.getItem("msg");
    }
});

// Email Section

// Check if there's a email address stored in sessionStorage and display it

if (sessionStorage.getItem("email")) {
    document.getElementById("storedEmail").textContent = sessionStorage.getItem("email");
}

// Store the entered name in sessionStorage

function storeEmail() {
    var email = document.getElementById("useremail").value;
    sessionStorage.setItem("email", email);
    document.getElementById("storedEmail").textContent = email;
}


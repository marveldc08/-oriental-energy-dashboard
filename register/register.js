// Function to check password strength
function checkPasswordStrength(password) {
    const strengthIndicator = document.getElementById("passwordStrength");
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!.,%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
    const mediumPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (strongPasswordRegex.test(password)) {
        strengthIndicator.textContent = "Strong Password";
        strengthIndicator.style.color = "green";
        return true;
    } else if (mediumPasswordRegex.test(password)) {
        strengthIndicator.textContent = "Medium Strength Password";
        strengthIndicator.style.color = "orange";
        return false;
    } else {
        strengthIndicator.textContent = "Weak Password";
        strengthIndicator.style.color = "red";
        return false;
    }
}

// Function to check if passwords match
function checkConfirmPassword() {
    const password = document.getElementById("createPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const confirmIndicator = document.getElementById("confirmPasswordMessage");

    if (confirmPassword === "") {
        confirmIndicator.textContent = "";
        return false;
    }

    if (password === confirmPassword) {
        confirmIndicator.textContent = "Passwords match";
        confirmIndicator.style.color = "green";
        return true;
    } else {
        confirmIndicator.textContent = "Passwords do not match";
        confirmIndicator.style.color = "red";
        return false;
    }
}

// Function to handle registration
function register(event) {
    event.preventDefault()
    // const email = document.getElementById("email").value;
    const password = document.getElementById("createPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const isPasswordStrong = checkPasswordStrength(password);
    const isPasswordMatch = checkConfirmPassword();

  if (!isPasswordStrong) {
        alert("Please enter a stronger password.");
    } else if (!isPasswordMatch) {
        alert("Passwords do not match.");
    } else {

        window.location.href = "index.html"; 
    }
}


document.getElementById("createPassword").addEventListener("input", function() {
    checkPasswordStrength(this.value);
    checkConfirmPassword();
});

document.getElementById("confirmPassword").addEventListener("input", checkConfirmPassword);

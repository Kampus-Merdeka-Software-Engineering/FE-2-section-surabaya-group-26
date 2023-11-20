var emailField = document.getElementById("emailField");
var emailLabel = document.getElementById("emailLabel");
var emailError = document.getElementById("emailError");

function validateEmail(){
    emailLabel.style.bottom = "45px";

    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Please enter a valid email";
        emailField.style.borderBottomColor = "Red";
        emailError.style.top = "110%";
        return false;
    }

    emailError.innerHTML = "";
    emailField.style.borderBottomColor = "";
    emailError.style.top = "100%";
    return true;
}
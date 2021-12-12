window.onload = function() {
  submitSignupButton();
  submitSigninButton();
}
function submitSignupButton() {
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById('lastName');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var confirmPassword = document.getElementById('confirmPassword');
  var submitSignupButton = document.getElementById('submitSignupButton');

  submitSignupButton.onclick = function() {
    var fName = firstName.value;
    var lName = lastName.value;
    var mail = email.value;
    var pass = password.value;
    var cpass = confirmPassword.value;
    window.open("login.html", "_self");
  }
}



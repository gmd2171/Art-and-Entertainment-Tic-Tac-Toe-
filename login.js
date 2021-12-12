window.onload = function() {submitSigninButton();
  }
  function submitSigninButton() {
    var email = document.getElementById("E");
    var password = document.getElementById("P");
    var submitSigninButton = document.getElementById("submitSigninButton");
    
    submitSigninButton.onclick = function() {
      var e = email.value;
      var p = password.value;
      window.open("TicTacToe.html", "_self")
    }
  }
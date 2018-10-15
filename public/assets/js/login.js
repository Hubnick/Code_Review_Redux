console.log("woo, login.js has loaded!")


$(document).ready(function(){
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    loginForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
          email: emailInput.val().trim(),
          password: passwordInput.val().trim()
        };
    console.log(userData);
        if (!userData.email || !userData.password) {
          alert("not a valid login or password");
          return;
        }
    
        loginUser(userData.email, userData.password);
        // emailInput.val("");
        // passwordInput.val("");
      });
    
      function loginUser(email, password) {
        $.post("/api/login", {
          email: email,
          password: password
        }).then(function(data) {
          window.location.replace(data);
        }).catch(function(err) {
          console.log(err);
        });
      }


});
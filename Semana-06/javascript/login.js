window.onload = function () {
    var logButton = document.getElementById('login')
    var divTxt = document.getElementsByClassName('login')
    var emailTxtDiv = divTxt[0];
    var passwordTxtDiv = divTxt[1];
    emailInput = emailTxtDiv.children[1];
    passwordInput = passwordTxtDiv.children[1];
    logButton.addEventListener('click', logClick)
}

function logClick() {
    var email = emailInput.value;
    var password = passwordInput.value;
    
}


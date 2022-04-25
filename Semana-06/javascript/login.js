window.onload = function () {
    var logButton = document.getElementById('login');
    var divTxt = document.getElementsByClassName('login');
    emailTxtDiv = divTxt[0];
    passwordTxtDiv = divTxt[1];
    emailInput = emailTxtDiv.children[1];
    passwordInput = passwordTxtDiv.children[1];
    logButton.addEventListener('click', logClick);
    var form = document.getElementById('form');
    var errorTxt = document.getElementById('error');
    
}


/*function myFocus(x, i){
   x.classList.remove('blur');
   errorTxt[i].classList.remove('error');
   errorTxt[i].classList.add('error-view');
}

function myBlur(x, i){
    if (x.value == "") {
        x.classList.add('blur');
        errorTxt[i].classList.add('error');
        errorTxt[i].classList.remove('error-view');
    }
}*/

function logClick() {
    var email = emailInput.value;
    var password = passwordInput.value;
    if (validateEmail(email) && validatePassword(password)) {
        alert("Login succefully\nEmail: " + email +"\nPassword: " + password)
    }
    if (!validateEmail(email)) {
        sError(emailTxtDiv);
        alert("Invalid Email")
    }else{
        hError(emailTxtDiv);
    }
    if (!validatePassword(password)) {
        sError(passwordTxtDiv);
        alert("Invalid Password")
    }else{
        hError(passwordTxtDiv);
    }
}

function validateEmail(email) {
    var eRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    if (!eRegex.test(email)) {
        return false;
    }else{
        return true; 
    }
    
}

function validatePassword(password) {
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var num = 0;
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "l", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var char = 0;
    var mayus = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "L", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var mayusCount = 0;
    var signs = false;
    for (i = 0; i < password.length; i++) {
        if (numbers.includes(password[i])) {
            num++;
        } else if(letters.includes(password[i])){
            char++;
        } else if (mayus.includes(password[i])) {
            mayusCount++;
        }else{
            signs = true;
        }
    }
    if (password.length >= 8 && num >= 1 && char >=1 && !signs) {
        return true;
    } else{
        return false;
    }
}

function sError(divsTxt) {
    var divChild = divsTxt.children;
    divChild[1].classList.add('input-error')
    divChild[2].classList.remove('error-view');
}

function hError(divsTxt){
    var divChild = divsTxt.children;
    divChild[1].classList.remove('input-error')
    divChild[2].classList.add('error-view');
}
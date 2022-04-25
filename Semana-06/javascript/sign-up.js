window.onload = function () {
    var signButton = document.getElementById('sign-up')
    signButton.addEventListener('click', signClick)
}

var nameInput = document.getElementById('name');
var lNameInput = document.getElementById('l-name');
var dniInput = document.getElementById('dni');
var dateBirth = document.getElementById('date');
var phoneInput = document.getElementById('phone');
var addInput = document.getElementById('address');
var locationInput = document.getElementById('locate');
var codeInput = document.getElementById('code');
var emailInput = document.getElementById('email');
var passInput = document.getElementById('password');
var confPassInput = document.getElementById('conf-password');

function signClick() {
    var textBoxes = document.getElementsByClassName('sign-up');
    console.log(textBoxes)
    var data = {
        nameValue : document.getElementById('name').value,
        lastName : document.getElementById('l-name').value,
        dni : document.getElementById('dni').value,
        birthDate : document.getElementById('date').value,
        phone : document.getElementById('phone').value,
        address : document.getElementById('address').value,
        location : document.getElementById('locate').value,
        code : document.getElementById('code').value,
        email : document.getElementById('email').value,
        password : document.getElementById('password').value,
        confPassword : document.getElementById('conf-password').value,
    }
    var allIsValid = true;
    if (!validateNameLastName(data.nameValue, textBoxes[0])) {
        alert('ERROR\nName is invalid')
        allIsValid = false;
    }
    if (!validateNameLastName(data.lastName, textBoxes[1])) {
        alert('ERROR\nLast Name is invalid')
        allIsValid = false;
    }
    if (!validateDNI(data.dni, textBoxes[2])) {
        alert('ERROR\n DNI is invalid')
        allIsValid = false
    }
    if (!validatePhone(data.phone, textBoxes[4])) {
        alert('ERROR\n Phone is invalid')
        allIsValid = false;
    }
}

function validateNameLastName(x, txtBoxes) {
    var minLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "l", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var mayusLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "L", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var isValid = true;
    var name = x.toLowerCase();
    for (i = 0; i < name.length; i++) {
        if (!minLetters.includes(name[i]) && !mayusLetters.includes(name[i])) {
            isValid = false;
        }
    }
    if (name.length >= 3 && isValid) {
        hError(txtBoxes);
        return true;
    } else{
        sError(txtBoxes);
        return false;
    }
}

function validateDNI(dni, txtBoxes){
    var nums = ['0','1','2','3','4','5','6','7','8','9'];
    var isValid = true;
    for (i = 0; i < dni.length; i++){
        if (!nums.includes(dni[i])) {
            isValid = false;
        }
    }
    if (dni.length >= 7 && isValid) {
        hError(txtBoxes);
        return true;
    }else {
        sError(txtBoxes);
        return false;
    }
}

function validatePhone(phone, txtBoxes){
    var nums = ['0','1','2','3','4','5','6','7','8','9'];
    var isValid = true;
    for(i = 0; i < phone.length; i++){
        if (!numbers.includes(phone[i])) {
            isValid = false;
        }
    }
    if (phone.length >= 10 && isValid) {
        hError(txtBoxes);   
        return true;     
    }else {
        sError(txtBoxes);
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

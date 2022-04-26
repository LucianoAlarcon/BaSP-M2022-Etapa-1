window.onload = function () {
    var signButton = document.getElementById('sign-up');
    signButton.addEventListener('click', signClick);
    var divTxt = document.getElementsByClassName('sign-up');
    divTxtName = divTxt[0];
    nameInput = divTxtName.children[1];
    divLName = divTxt[1];
    lNameInput = divLName.children[1];
    divDni = divTxt[2];
    dniInput = divDni.children[1];
    divPhone = divTxt[4];
    phoneInput = divPhone.children[1];
    divLocate = divTxt[6];
    locateInput = divLocate.children[1];
    divEmail = divTxt[8];
    emailInput = divEmail.children[1];
    divPass = divTxt[9];
    passInput = divPass.children[1];
    divConfPass = divTxt[10];
    confPassInput = divConfPass.children[1];



    nameInput.onfocus = function(){
        myFocus(nameInput, divTxtName);
    }
    nameInput.onblur = function () {
        myBlur(nameInput, divTxtName);
    }
    lNameInput.onfocus = function(){
        myFocus(lNameInput, divLName);
    }
    lNameInput.onblur = function () {
        myBlur(lNameInput, divLName);
    }
    dniInput.onfocus = function(){
        myFocus(dniInput, divDni);
    }
    dniInput.onblur = function () {
        myBlur(dniInput, divDni);
    }
    phoneInput.onfocus = function(){
        myFocus(phoneInput, divPhone);
    }
    phoneInput.onblur = function () {
        myBlur(phoneInput, divPhone);
    }
    locateInput.onfocus = function(){
        myFocus(locateInput, divLocate);
    }
    locateInput.onblur = function () {
        myBlur(locateInput, divLocate);
    }
    emailInput.onfocus = function(){
        myFocus(emailInput, divEmail);
    }
    emailInput.onblur = function () {
        myBlur(emailInput, divEmail);
    }
    passInput.onfocus = function(){
        myFocus(passInput, divPass);
    }
    passInput.onblur = function () {
        myBlur(passInput, divPass);
    }
    confPassInput.onfocus = function(){
        myFocus(confPassInput, divConfPass);
    }
    confPassInput.onblur = function () {
        myBlur(confPassInput, divConfPass);
    }
}

function myFocus(input, divTxtBox){
    hError(divTxtBox);
 }
 
function myBlur(input, divTxtBox){
    if (input.value == "") {
        sError(divTxtBox);
    }else{
        hError(divTxtBox);
    }
 }


/*var nameInput = document.getElementById('name');
var lNameInput = document.getElementById('l-name');
var dniInput = document.getElementById('dni');
var dateBirthInput = document.getElementById('date');
var phoneInput = document.getElementById('phone');
var addInput = document.getElementById('address');
var locationInput = document.getElementById('locate');
var codeInput = document.getElementById('code');
var emailInput = document.getElementById('email');
var passInput = document.getElementById('password');
var confPassInput = document.getElementById('conf-password');*/

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
    if (!validateLocation(data.location, textBoxes[6])) {
        alert('ERROR\nLocation is invalid')
        allIsValid = false;
    }
    if (!validateEmail(data.email, textBoxes[8])) {
        alert('ERROR\nInvalid Email')
        allIsValid = false;
    }
    if (!validatePassword(data.password, textBoxes[9])) {
        alert('ERROR\nInvalid Password')
        allIsValid = false;
    }
    if (!validatePassword2(data.password, data.confPassword, textBoxes[10])) {
        alert('ERROR\nPassword do not match')
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

function validateLocation(locate, txtBoxes){
    var nums = ['0','1','2','3','4','5','6','7','8','9'];
    var minLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "l", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var mayusLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "L", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var locateLower = locate.toLowerCase();
    var numCount = 0;
    var lettMinCount = 0;
    var lettMayusCount = 0;
    var special = false;
    for (i = 0; i < locateLower.length; i++){
        if (number.includes(locateLower[i])) {
            num++;
        }else if (minLetters.includes(locateLower[i])) {
            lettMinCount++;
        }else if (mayusLetters.includes(locateLower[i])) {
            lettMayusCount++;
        }else{
            special = true;
        }
    }
    if (locateLower.length >= 3 && !special) {
        hError(txtBoxes);
        return true;
    }else{
        sError(txtBoxes);
        return false;
    }
}

function validateEmail(email, txtBoxes){
    var eRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    if (!eRegex.test(email)) {
        sError(txtBoxes)
        return false;
    }else{
        hError(txtBoxes)
        return true; 
    }
}

function validatePassword(password, txtBoxes) {
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
        hError(txtBoxes);
        return true;
    } else{
        sError(txtBoxes);
        return false;
    }
}

function validatePassword2(password, confPassword, txtBoxes){
    if (password === confPassword) {
        hError(txtBoxes);
        return true;
    }else{
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
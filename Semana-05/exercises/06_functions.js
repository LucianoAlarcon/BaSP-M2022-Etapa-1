var suma = {
    num1: 10,
    num2: 4,

    result: function(){
        return this.num1 + this.num2;
    }
};
var final = suma.result();
console.log("ex06-functions-A: " + final)

/////////////////////////////////////////////////////

function result(num1,num2){
    if (isNaN(num1) || isNaN(num2)) {
        alert("One of paramether is not a number")
        return NaN;
    } 
    return num1 + num2;
}

var final = result(4,25);
console.log("ex06-functions-B: " + final)

//////////////////////////////////////////////////////

function validateInteger(x) {
    return Number.isInteger(x);
}
var integer = validateInteger(22.50);
console.log("ex06-functions-C: " + integer)

/////////////////////////////////////////////////////

function result(num1,num2){
    if (typeof(num1) === "number" && typeof(num2) === "number") {
        if (Number.isInteger(num1) && Number.isInteger(num2)) {
            return num1 + num2;
        }else{
            alert("One of paramether is not integer")
            if (!Number.isInteger(num1)) {
                return Math.round(num1);
            }else{
                return Math.round(num2);
            }
        } 
    }else{
        alert("One of paramether is not a number")
        return NaN;
    }    
}
var final = result(4,25.5);
console.log("ex06-functions-D: " + final)

///////////////////////////////////////////////////////

function result(num1,num2){
    if (typeof(num1) === "number" && typeof(num2) === "number") {
        if (validation(num1,num2)) {
            return num1 + num2;
        }else{
            alert("One of paramether is not integer")
            if (!Number.isInteger(num1)) {
                return Math.round(num1)
            }else{
                return Math.round(num2)
            }
        } 
    }else{
        alert("One of paramether is not a number")
        return NaN;
    }    

}
function validation(num1, num2){
    if (Number.isInteger(num1) && Number.isInteger(num2)){
        return true;
    }else{
        return false;
    }
}
var final = result(4,25.5);
console.log("ex06-functions-F: " + final)

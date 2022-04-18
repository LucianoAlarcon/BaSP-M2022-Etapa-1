var words = ["fruit", "color", "jScript", "radium", "rocket"]
for (let i = 0; i < words.length; i++) {
    console.log("ex05-for-A: " + words[i])
}

var words = ["fruit", "color", "jScript", "radium", "rocket"]
for (let i = 0; i < words.length; i++) {
    console.log("ex05-for-B: " + words[i].substring(0,1).toUpperCase() + words[i].substring(1).toLowerCase())
}


var words = ["fruit", "color", "jScript", "radium", "rocket"];
var sentence = "";
for (let i = 0; i < 5; i++) {
    sentence = sentence + words[i] + " ";
}
console.log("ex05-for-C: " + sentence);

var words = [];
for (let i = 0; i < 10; i++) {
    words[i] = i;
}
console.log("ex05-for-D: " + words)
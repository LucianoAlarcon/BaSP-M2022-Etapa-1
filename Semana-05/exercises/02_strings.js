var word;
word = "statements"

var result = word.toUpperCase();
console.log("ex02-strigns-A: " + result)

var word;
word = "Statements";

var result = word.substring(0,5);
console.log("ex02-strigns-B: " + result);

var word;
word = "Statements";

var result = word.substring(7, 10)
console.log("ex02-strigns-C: " + result);

var word;
word = "statements";

result = word.substring(0,1).toUpperCase() + word.substring(1,10).toLowerCase();
console.log("ex02-strigns-D: " + result);

var word;
word = "Hello World";

result = word.indexOf(" ");
console.log("ex02-strigns-E: " + result);

var word;
word = "statements javascript"

result = word.substring(0,1).toUpperCase() + word.substring(1, 11).toLowerCase() + word.substring(11,12).toUpperCase() + word.substring(12,21).toLowerCase();
console.log("ex02-strigns-F: " + result);
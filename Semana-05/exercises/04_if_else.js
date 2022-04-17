var rnum;
rnum = Math.random(0,1);
if (rnum >= 0.5) {
    console.log("ex04-if-else-A: Greater than 0,5")
} else {
    console.log("ex04-if-else-A: Lower than 0,5")
}


var edad = Math.floor(Math.random() * 101)
console.log("ex04-if-else-B: Edad: " + edad);

if (edad <= 2) {
    console.log("ex04-if-else-B: Es un bebé")
}else if ((edad > 2) && (edad <= 12)) {
    console.log("ex04-if-else-B: Es un niño")
}else if ((edad > 12) && (edad <= 19)) {
    console.log("ex04-if-else-B: Es un adolescente")
}else if ((edad > 19) && (edad <= 30)) {
    console.log("ex04-if-else-B: Es un joven")
}else if ((edad > 30) && (edad <= 60)) {
    console.log("ex04-if-else-B: Es un adulto")
}else if ((edad > 60) && (edad <= 75)) {
    console.log("ex04-if-else-B: Es un adulto mayor")
}else {
    console.log("ex04-if-else-B: Es un anciano")
}
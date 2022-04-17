var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("ex03-arrays-A: " + month[4] + " " + month[10]);

var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("ex03-arrays-B: " + month.sort());

var fruits = ["Banana", "Manzana", "Naranja", "Pera"];
fruits.unshift("Mango")
fruits.push("Sandia")

console.log("ex03-arrays-C: " + fruits);

var fruits = ["Banana", "Manzana", "Naranja", "Pera"];
fruits.shift();
fruits.pop();

console.log("ex03-arrays-D: " + fruits);

var fruits = ["Banana", "Manzana", "Naranja", "Pera"];
fruits.reverse();

console.log("ex03-arrays-E: " + fruits);

var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("ex03-arrays-F: " + month.join(" - "));

var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("ex03-arrays-G: " + month.slice(4, 11))
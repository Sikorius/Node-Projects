/*Programa que
 soma dois números */
let readlineSync = require("readline-sync");
let valor1 = 0;
let valor2 = 0;
let valor3 = 0;
let valor4 = 0;
let valor5 = 0;
let total = 0;
let media = 0;

console.log("Programa que calcula a media de cinco numeros");
valor1 = parseFloat(readlineSync.question("1 Valor: "));
valor2 = parseFloat(readlineSync.question("2 Valor: "));
valor3 = parseFloat(readlineSync.question("3 Valor: "));
valor4 = parseFloat(readlineSync.question("4 Valor: "));
valor5 = parseFloat(readlineSync.question("5 Valor: "));
total = valor1 + valor2 + valor3 + valor4 + valor5;
media = total / 5; 
console.log("Total: " + total);
console.log("Media: " + media);
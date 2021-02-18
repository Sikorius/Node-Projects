let readline = require("readline-sync");
let calculaarea = require("area-triangulo-df");
let base = 0;
let altura = 0;
let area = 0;

console.log("Calcula a area de um triangulo");
base = parseInt(readline.question("Base: "));
altura = parseInt(readline.question("Altura: "));
//area = (base * altura) / 2;
area = calculaarea(base,altura);
console.log("A area do triangulo e: " + area);

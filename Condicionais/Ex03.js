var prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um número: "));

if (numero % 2 === 0) {
    console.log("O número é par");
} else if (numero % 2 !== 0) {
    console.log("O número é ímpar");
} else {
    console.log("ERROR");
}
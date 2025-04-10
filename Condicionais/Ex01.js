//Verificar se um número é positivo, negativo ou zero.

var prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um numero: "));

if (numero >= 0) {
    console.log("O numero é positivo ");
}else if(numero < 0){
    console.log("O número é negativo")
}else{
    console.log("ERROR")
}
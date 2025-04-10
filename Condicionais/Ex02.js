//

//Qual sua idade?
//Você é maior de idade, então, pode tirar a carteira.
//SE NÃO você não pode tirar a carteira de motorista

//Pessoas maiores de idade(>=18)

var prompt = require('prompt-sync')();

let idade = Number(prompt("Olá, digite sua idade: "))

// let idade = 17;

if (idade >= 18) {
    console.log("Você poderá tirar a carteira ");
}else if(idade < 18){
    console.log("Você não poderá tirar a carteira")
}else{
    console.log("Essa informação não é válida")
}
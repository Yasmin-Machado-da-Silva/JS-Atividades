// Verificar se um aluno foi aprovado

var prompt = require('prompt-sync')();

let Aluno = Number(prompt("Qual foi sua nota? "));

if (Aluno >= 5) {
    console.log("Você passou");
}else if(Aluno < 5){
    console.log("Você reprovou")
}else{
    console.log("Nota não consiste no sistema")
}
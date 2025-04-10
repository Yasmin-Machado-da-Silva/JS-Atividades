var prompt = require('prompt-sync')();

let senhaCorreta = "84272";
let senhaDigitada = prompt("Digite a senha: ");

if (senhaDigitada === senhaCorreta) {
    console.log("Senha correta!");
} else {
    console.log("Senha incorreta!");
}
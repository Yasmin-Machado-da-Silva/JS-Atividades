//Crie um sistema que permita cadastrar nomes. Antes de adicionar,
// verifique se o nome já está na lista (ignore maiúsculas/minúsculas). Se
// não estiver, adicione o usuário.
var prompt = require('prompt-sync')();

let nomes = ["Yasmin", "Yaya", "Min"]

let novoNome= prompt("Digite o usuario: ");

//pega o nome digitado em minusculo para comparar com a lista
let novoNomeMinusculo = novoNome.toLowerCase();

//cria um novo array com todos os nomes em minusculo
let nomesMinusculos = nomes.map(nome => nome.toLowerCase());

//Verfica se o nome ja esta na lista
if (!nomesMinusculos.includes(novoNomeMinusculo)) {
    nomes.push(novoNome);
    console.log(`${novoNome} Cadastrado com sucesso`); 
}else{
    console.log(`${novoNome} Ja esta cadastrado`);
}

console.log(nomes);

// Crie um array de objetos com produtos e preços. Exiba no console o
// nome e o preço com R$ formatado.

var prompt = require('prompt-sync')();

//Array de produtos com nomes e preços
produtos = [
    {nome: "Produto A", preco: 50.75},
    {nome: "Produto B", preco: 30.99},
    {nome: "Produto C", preco: 100.0}
];

//Exibir os produtos com preço formatado
produtos.forEach(produto => {
    console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2).replace(".", ",")}`);
});

//Exemplo de parte do codigo para cadastro de nomes
let nomes = ["Yasmin","Yaya","Min"];

let novoNome = prompt("Digite o usuario: ")

//pega o nome que foi digitado em minusculo para comparar com a lista
let novoNomeMinusculo = novoNome.toLowerCase();

//Cria um novo array com todos os nomes em minusculo
let nomesMinusculos = nomes.map(nome => nome.toLowerCase());

//Verifica se o nome já esta na lista
if (!nomesMinusculos.includes(novoNomeMinusculo)) {
    nomes.push(novoNome);
    console.log(`${novoNome} Cadastrado com sucesso`);
} else {
    console.log(`${novoNome} Ja esta cadastrado`);
}
console.log(nomes);

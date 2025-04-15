// let numeros = [20, 5, 3]
// console.log(numeros.length)

// .reverse() -> Rverte o nosso array
// let numeros = [60, 70, 86, 50];
// numeors.reverse;

// console.log(numeros);

// let nomes = ["Yasmin", "Yaya", "Min"];

//.push => adiciona ao final;
// nomes.push("YASMIIIIIIN");

//unshift() => Remove no final
// nomes.unshift("Sophia");

//shift() => Remove no inicio
// nomes.shift();

//pop()=> Remover o final
// nomes.pop

// console.log(nomes.splice(2.1))
// console.log(nomes)

//=================================================//

// let nomesAnimais = ["Julie", "Meg", "Mel", "Kiara", "Lola", "Romeu"];

//.includes() => Se existe no Array, se existir ele retornará true

// console.log(nomesAnimais.includes("Bob"))

//=================================================//
// let valores = [30, 55, 90, 96]

//Quero os valores maiores que 50
// const maiores = valores.filter(num => num > 50);

// console.log(maiores)

//=================================================//

//. map() => Definição: //Metodo usado em arrays que permite tranformar os elementos do array original em novos valores, 
// criando um array, sem modificar o original


//1. lista de nomes de alunos e notas
// let alunos =[
//     {nome: "Clara", nota: 8},
//     {nome: "Laura", nota: 10},
//     {nome: "Yasmin", nota: 9},
//     {nome: "Aurora", nota: 9},
//     {nome: "Milla", nota: 9},
//     {nome: "Joana", nota: 9},
//     {nome: "Jurandir", nota: 9},
//     {nome: "Katty", nota: 9}
// ];

//lista de nomes
// let alunoNomes = alunos.map(aluno => aluno.nome);

// let alunoNomesDois = aluno.map(function(aluno){
//     return aluno.nome;
// });

// let alunoNota = alunos.map(aluno => aluno.nota);
// console.log(alunoNomes);
// console.log(alunoNomesDois);

// 2. Criar um array com mensagens personalizadas
// let nomes = ["Caio", "Ryan", "Yasmin", "Vinicius"];

// Olá Yasmin
// Olá Caio

// let mensagem = nomes.map(itemDoArrayNomes => `Olá, ${itemDoArrayNomes}`);
// let mensagem = nomes.map(itemDoArrayNomes => "Olá," + {itemDoArrayNomes});

// console.log(mensagem);

// 3.Pegar apenas os primeiros carcteres de nomes

// let nomes = ["Isabelly", "Emilly", "Yasmin", "Guilherme"];

// let inicialNomes = nomes.map(element => element[0])

// console.log(inicialNomes);

//4. kaue@gmail.com, pedro@hotmail.com, julia@outlook.com

let emails =[
    "kaue@gmail.com", "pedro@hotmail.com","julia@outlook.com"
]

let dominios = emails.map(element => element.split("@")[1]);

console.log(dominios);

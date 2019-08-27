console.log("Bem vindos");

// declaração de variavel
var trainee = "javascript";
let fruta = "banana";

console.log(trainee);
console.log(fruta);

// diferenças entre o var e let:
// var permite redeclaração da mesma variavel

// var trainee = 100;
// console.log(trainee);

// erro na variavel já foi declarada
// let fruta = 'manga'

// constante
const filme = "Avengers";
console.log(filme);
// Error filme é apenas para leitura
// filme = 'Homem aranha'

// TIPO DE DADOS
let ator = "Brad Pitt"; // string
console.log(typeof ator);

let quantidade = 25;
console.log(typeof quantidade); // number

let preco = 25.5;
console.log(typeof preco); // number

let ehBacana = true;
console.log(typeof ehBacana); // boolean

let filmes = [
  "Mulher maravilha",
  "As panteras",
  "O menino que descobriu o vento"
];
console.log(typeof filmes); // object
console.log(Array.isArray(filmes)); // true

let avenger = {
  horas: 2,
  diretores: "Anthony e Joe Russo",
  atores: ["Chris", "Mark", "Scarlett"],
  ehBom: true
};

console.log(typeof avenger); // object

// existe mais um tipo de dados Função, mas veremos depois

// OPERACOES BASICAS
let soma = 1 + 2;
console.log(soma);
console.log(10 - 1);
console.log(10 / 2);
console.log(11 % 2);

console.log("Maria" + " " + "Silva");
console.log(1 + "1");

let nome = "Joao";
let sobrenome = "Pereira";
console.log(nome + " " + sobrenome);

// template literals
console.log(`${nome} ${sobrenome}`);

// Condicionais
if (nome === "Joao") {
  console.log(`é o Jão`);
} else {
  console.log("Não é o Jão");
}

if (nome !== "Joao") {
  console.log(`Não é o Jão`);
} else {
  console.log("É o Jão");
}

const valor = 5;
if (valor == "5") {
  //compara o valor mas nao compara o tipo
  console.log("comparação de valores");
} else {
  console.log("Não é 5");
}

// escopo de variavel
// tipo de dados função

import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// console.log('abc')

// var linguagens = 'Javascript'

// console.log(linguagens)

// var linguagens = 444

// console.log(linguagens)

// let alo = "sjdioasjdoi"
// alo = 23213123

// const constante = "aqui eh uma constante"

// //constante = 2

// const aloho = function () {

// }

// const alo2 = 10

// function nomedefuncao (alo2) {
//   // let outronumero = 3
//   console.log(alo2)
//   alo2 = 20
// }

// nomedefuncao(alo2)

// let pessoa = {
//   nome: 'qualquer'
// }

// pessoa.altura = 1.70

// console.log(pessoa)

// let tipo = {
//   nome: ''
// }

// tipo.nome = 'jdisjio'
// tipo.funcao = function () {
//   console.log('eu sou uma funcao')

// }

// tipo.funcao()

// let qqcoisa = [{ name: 'jaqueline'},
// 2]

// // console.log(typeof ator)

// qqcoisa[0].idade = 5
// console.log(qqcoisa[0])
// console.log(qqcoisa[0].name)
// console.log(qqcoisa[0].idade)
// // console.log(qqcoisa[1])
// // console.log(qqcoisa[2])
// let ator = {
//   name: 'Brad',
//   age: 50,
//   filmes2: 9
// }

// let filmes = [
//   {
//     name: 'Avengers',
//     ano: 2019,
//     atores: ['Brad', 'Scarlett']
//   }
// ]
// filmes[0].atores = ator

// console.log(filmes)

// operaçoes basicas

// let soma = 1 + 2
// console.log(soma)

// console.log(10 - 1)
// console.log(10 / 2)
// console.log(10 % 2 === 0)

// console.log('Jaqueline' + ' ' + 'Kirino')
// let numero = 2
// let numero2 = 3
// let numero3 = '1'
// console.log(numero + numero2 + numero3 + numero2)

// let nome = 'Maria'
// let sobrenome = 'Silva'
// // template literals
// let nomeSobrenome = `Sr(a) ${nome} 
// ${1 + 2}`

// console.log(nomeSobrenome)

// let array2 = [1 , 2]
// let array3 = [3, 4]

// console.log(array2.concat(array3))

//Condicionais

// const info = {
//   name: 'Jaqueline2',
//   age: 29,
//   isActive: false
// }

// if (info.isActive) {
//   console.log('tá ok')

// } else {
//   console.log('nok!!!!!!!')
// }

/// ternarios

// let quaquercoisa = info.age >= 20 &&
//  (info.isActive || info.name === 'Maria') ? 
//   'Olha ela ta ativa' : 'Não ta ativo'
// console.log(quaquercoisa)

// const dia = 3
// switch(dia) {
  
//   case 1:
//     console.log('dia 1')
//     break;
//   case 2:
//     console.log('dia 2')
//     break;
//   case 3:
//     console.log('dia 3')
//     break;
//   default:
//     console.log('dia4')
//     break;
// }

// Funções

// function somar(numero1, numero2) {
//   return numero1 + numero2
// }

// console.log(somar(1, 2))

// const somar2 = function (numero1, numero2) {
//   return numero1 + numero2
// }

// console.log(somar2(3, 5))

// const somar3 = (num1, num2) => num1 + num2

// console.log(somar3(3, 5))

// const alo = fruta => console.log(fruta)

// alo(somar3(1, 2))

// Crie uma função que recebe por parâmetro a idade e 
//retorne se é maior de idade ou não
 
// const maiorIdade = idade => idade >= 18

// console.log(maiorIdade(18))

// const maiorIdade2 = idade => idade >= 18 ? 'Maior' : 'Menor'
// console.log(maiorIdade2(18))

// const maiorIdade3 = idade => {
//   if(idade >= 18) return 'Maior' 
//   else return 'Menor'
// }

// console.log(maiorIdade3(10))

// Exercicio

// Criar uma função que de acordo com um numero de 1 a 3, retorne
// medalha, 1 = ouro, 2 = prata e 3 = bronze
// Usar Array
// se usar if, usar um só
// usar arrow function

// const qualMedalha = num => {
//   let medalhas = ['ouro', 'prata', 'bronze']

//   if (num > 3 || num < 0) {
//     return 'Não viaja'
//   }

//   return medalhas[num-1]
// }

// console.log(qualMedalha(2))

// const qualMedalha2 = num => {
//   let medalhas = ['ouro', 'prata', 'bronze']
  
//   return (num > 3 || num < 0) ? 'Não viaja' : medalhas[num-1]
// }

// console.log(qualMedalha2(5))

// const qualMedalha3 = num => {
//   let medalhas = ['não viaja', 'ouro', 'prata', 'bronze']
  
//   return (num > 4 || num < 1) ? 'Não viaja' : medalhas[num]
// }

// const qualMedalha4 = num => {
//   let medalhas = {
//     1: 'ouro',
//     2: 'prata',
//     3: 'bronze'
//   }
  
//   return (num > 3 || num < 0) ? 'Não viaja' : medalhas[num]
// }

// console.log(qualMedalha4(5))

// Famos aprenter for - laço de repetições

// let contador 

// for(let contador = 1; contador < 11; contador++) {
//   console.log(contador)
// }

// let linguagens = ['Js', 'CSS', 'HTML']

// Criar uma função que percorra de 0 a 100, e printe somente os numeros pares
// nao usar if, ternario ou switch

// const pares = () => {
//   for(let i = 0; i < 101; i+= 2) {
//     // if (i % 2 === 1) console.log(i, 'impar')
//     console.log(i)
//   }
// }

// pares()

// let linguagens = ['javascript', 'CSS', 'HTML', 'JAVA', 'dsdas' ]

// linguagens.forEach(element => {
//   console.log(element)
// })

let valores = [10, 20, 55.2 ]
const taxa = 4.10
// const cotacao = valores.map(element => `R$ ${element * taxa}`)

console.log(valores.map(element => `R$ ${element * taxa}`))

// filter 
// reduce
// join
// splice

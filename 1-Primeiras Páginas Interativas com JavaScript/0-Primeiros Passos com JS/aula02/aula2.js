// Variavel Boolean (True or False)

// //1
// const camisetaGabrielVermelha = true;
// //0
// const camisetaFernandoVermelha = false;

// Operadores logicos:
// > < = <= >=...

// Numeros Pares

const numero = 10;

// Operador "%" e o resto da divisao (0 e Par e 1 e Impar)
// Quando usamo ==(ignora o tipo da variavel(comparar texto com numero ocorre)) e o mesmo que === (nao ignora o tipo (comparar texto com numero nao ocorre))
const numeroPar = numero % 2 === 0;

// console.log(numeroPar);
//Par
// if (numeroPar) {
//   console.log("Par")
// }
// //Impar
// if(!numeroPar){
//   console.log("Impar")
// }


console.log(numeroPar);

if (numeroPar) {
  console.log("Par");
}else{
  console.log("Impar");
};


// ***************desafio ***************
console.log("*********Desafio*********");

// Calcule o gasto de uma viagem

// 3 Variaveis serao necessarias:
// 1 Preco Gasolina.
// 2 Preco Etanol
// 3 Tipo do Combustivel
// 4 Km por Litro do Veiculo
// 5 Distancia em KM da viagem.

//***** Declaracoes *****
const precoGasol = 5.48;
const precoEtanol = 4.87;
//Define se e Gasolina ou Nao.
const isGasol = true;
// Km do veiculo com 1 Litro.
const kmVeiculo = 15;
const distanciaViagem = 60;

let custoViagem;


// E Gasolina
if (isGasol) {
  custoViagem = ((distanciaViagem / kmVeiculo) * precoGasol);
} else {
  // Nao E Gasolina
  custoViagem = ((distanciaViagem / kmVeiculo) * precoEtanol)
}
console.log(`O custo da viagem sera de R$${custoViagem.toFixed(2)}`)
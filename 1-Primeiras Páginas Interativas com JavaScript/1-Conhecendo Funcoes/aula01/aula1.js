// function sayMyName(name){
//   console.log(`My name is ${name}`);
// };

// sayMyName(`Gabriel`);

// //Funcao
// function quadrado(valor){
//   return valor * valor;
// };
// //Procedimento
// function quadrado2(valor2){
//   valor2 * valor2;
// };

// console.log(quadrado(10) + quadrado(10));//Usando os retornos da funcao


// function incrementarJuros(valor, percentualJuros){
//   const acrescimo = (percentualJuros / 100) * valor;
//   return valor + acrescimo;
// };

// console.log(incrementarJuros(10,50));

console.log(`---------------------`)
console.log(`Exercicios`)
console.log(`---------------------`)

// FUNCOES SECUNDARIAS

//Calcular IMC
function calcular(peso, altura){
  return (peso / (altura**2));//peso / altura ao QUADRADO
}

//Classificar IMC
function classificar(imc){
  switch (true) {
  // Abaixo de 18.5
  case imc<18.5:
    return 'ABAIXO PESO';
// Acima de 18.5
  case imc<25:
    return 'PESO NORMAL';
// Acima de 25
  case imc>25:
    return 'ACIMA DO PESO';  

  default:
    break;
}
}

// FUNCAO PRIMARIA
function main(){
  const peso = 85;
  const altura = 1.80;

  const imc = calcular(peso,altura)
  console.log(classificar(imc))
  console.log(imc)
};

main();//Executa o programa.

console.log(main)

// Funcao nao nomeada e imediatamente invocada.
// (function (){
//   const peso = 85;
//   const altura = 1.80;

//   const imc = calcular(peso,altura)
//   console.log(classificar(imc))
//   console.log(imc)
// })();

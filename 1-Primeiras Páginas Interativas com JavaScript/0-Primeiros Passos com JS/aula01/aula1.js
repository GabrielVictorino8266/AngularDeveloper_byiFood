// Introducao
// let variavel = 20;

// console.log(variavel);




// ***********desafio**********
    // Calcule o gasto de uma viagem

    // 3 Variaveis serao necessarias:
    // 1 Preco Comb.
    // 2 Valor gasto carro por KM.
    // 3 Distancia em KM da viagem.
console.log("Consumo de Combustivel")
// Declaraoes das variaveis
let kmDistanciaCarro, distViagem;

// Preco do Combustivel por Litro
const precoComb = 5.4833333333333;
// Km feita pelo carro
kmDistanciaCarro = 15;
// Distancia da viagem (em KM)
distViagem = 30;


calculo = (distViagem / kmDistanciaCarro) * precoComb;


console.log(`O gasto da viagem foi de R$ ${calculo}`);
//sem usar variavel
console.log(`O gasto da viagem foi de R$ ${(distViagem / kmDistanciaCarro) * precoComb}`);
//Com arredondamento de numeros (toFixed)
console.log(`O gasto da viagem foi de R$ ${calculo.toFixed(2)}`);
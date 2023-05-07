// Percorre uma lista de numeros e informa se e par ou impar.

listaNumeros = [1,3,4,6,8,10,11];

// Testa a possibilidade de par ou impar.
// const valor = 10 % 2
// console.log(valor)

let texto = ``;

for(let posicao = 0; posicao < listaNumeros.length; posicao++){
  if(listaNumeros[posicao] % 2 === 0){//Resto zero
    console.log(`Par`)
  }else{
    console.log(`Impar`)
  }
};

console.log(`***Fim da execucao.***`)
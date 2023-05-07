//importa o arquivo auxiliar.
const { gets, print, entradas } = require(`./auxiliar`)

let maiorNumero = 0;//Define o maior Numero

// Insere os numeros do outro array.
for(i = 0; i < entradas.length; i++){
    // let numeroAtual = entradas[i];
    let numeroAtual = gets();//Retorna toda vez um numero diferente do Array Entradas.

    if(numeroAtual > maiorNumero){//Verifica se e maior que o numero Atual
      maiorNumero = numeroAtual;
    }
}

print(Math.max.apply(null, entradas));//Retorna o maior valor.





// // //Maneira 2
// const numerosSorteados = [];//Cria um segundo array

// let maiorNumero = 0;//Define o maior valor


// for(i = 0; i < entradas.length; i++){
//   const numeroSorteado = gets();//A funcao gets retorna um numero distinto toda vez que for chamada.
//   numerosSorteados.push(numeroSorteado);//Insere no novo array Numeros Sorteados

//   if(numeroSorteado > maiorNumero){//Numero atual inserido e maior do que a Variavel maiorNumero?
//     maiorNumero = numeroSorteado;
//   }
// }

// print(numerosSorteados);
// print(maiorNumero);
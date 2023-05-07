//Lista de Entradas
const entradas = [5,50,99,100,23];
let i = 0;//Contador de chamadas

function gets() {
  const valor = entradas[i];//Assume o valor da posicao indicada em entradas[i]
  i++;//Incrementa para a proxima chamada.
  return valor;
}

function print(texto){
  console.log(texto)
}


//Exportacao
module.exports = { entradas, gets, print };
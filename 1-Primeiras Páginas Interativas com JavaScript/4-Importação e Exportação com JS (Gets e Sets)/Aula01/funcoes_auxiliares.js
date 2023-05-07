function gets() {
  return 10;
}

function print(texto){
  console.log(texto);
}


//Exportando objetos com funcoes gets e print
module.exports = {gets, print};


// **VERSAO ANTIGA
// module.exports = {
//   gets : gets, 
//   print : print
// }
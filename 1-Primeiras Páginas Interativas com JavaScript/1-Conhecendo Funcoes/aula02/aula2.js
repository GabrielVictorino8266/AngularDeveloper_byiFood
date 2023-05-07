function escreverNome(nome) {
  return `Meu nome e ${nome}`;
};

// escreverNome(`Gabriel`);
// escreverNome(`Fernando`);

//Verifica se e maior de idade
function maiorIdade(idade){
  if(idade >= 18){//maior de idade
    console.log(escreverNome(`Gabriel`) + ` e sou Maior de idade.`)
  }else{
    console.log(`Menor de idade.`)
  }

  return idade;
}

maiorIdade(18);
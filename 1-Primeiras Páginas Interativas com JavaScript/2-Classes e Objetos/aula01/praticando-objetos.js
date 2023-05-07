// Praticando com uso de OBJETOS

class pessoa{
  nome;
  idade;
  anoNascimento;

  //Ao instanciar, informar os parametros adequados (nome, idade)
  constructor(nome,idade){
    this.nome = nome;
    this.idade = idade;
    this.anoNascimento = 2023 - idade;
  };

  informar(){
    console.log(`Meu nome e ${this.nome}, tenho ${idade} e nasci em ${this.anoNascimento}`)
  };
}


// Comparar pessoas
function compararPessoas(p1, p2){
  // Quem e mais velho
  if(p1.idade > p2.idade){//Pessoa 1 e MAIS VELHA
    console.log(`${p1.nome} e mais velho(a) que a ${p2.nome}.`)
  }else if(p2.idade > p1.idade){
    console.log(`${p2.nome} e mais velho(a) que ${p1.nome}`)
  }else{
    console.log(`${p1.nome} e ${p2.nome} possuem a MESMA IDADE`)
  }
};

const gabriel = new pessoa(`Gabriel`, 59);
const fernando = new pessoa(`Fernando`, 19);

compararPessoas(gabriel,fernando);
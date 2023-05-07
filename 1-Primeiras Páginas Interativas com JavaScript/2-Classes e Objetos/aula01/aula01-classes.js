//Classes em JS

// Evita a REPETICAO de codigo.
// EXPLICACAO DA AULA
//  A instancia e um exemplo (uma ocorrencia da classe (das caracteristicas))






class pessoa {//define como sao pessoas (permitindo INSTANCIAR uma pessoa)
//Pessoas possuem NOME, IDADE
//Funcao DESCREVER


  //Atributos da Classe
  nome;
  idade;
  anoNascimento;

  constructor(nome, idade){//o que ocorre ao instanciar (ao criar)
    this.nome = nome;//obriga a passar o nome
    this.idade = idade;//obriga a passar a idade
    this.anoNascimento = 2023 - idade;
  }

  //Metodos da Classe
  descrever(){
    console.log(`Seu nome e ${this.nome} e sua idade e ${this.idade} anos, nascido em ${this.anoNascimento}`);
  };
};


// Criacao de Instancias
// const gabriel = new pessoa();//Instancia gabriel (puxa as caracteristicas da classe pessoa)
const gabriel = new pessoa(`Gabriel`, 25);
// gabriel.nome = `Gabriel`;
// gabriel.idade = 25

const fernando = new pessoa(`Fernando`, 59);
// fernando.nome = `Fernando`;
//fernando.idade = 59;



// Impressao de Informacoes by Console.
console.log(`***********Impressao da Instancia Completa***********`)
console.log(gabriel);
console.log(fernando);

//Output da funcao da classe
console.log(`***********Metodos da Class***********`)
gabriel.descrever();
fernando.descrever();




// Objetos literais

const gabriel = {
  nome: `Gabriel Victorino`,
  idade: 25,
  cpf: `525.618.110-69`
};

console.log(gabriel);
console.log(gabriel.nome);//Output: Gabriel Victorino
console.log(gabriel.idade);//Output: 25

gabriel.altura = 1.69;

//Incrementou o objeto (adicionou uma propriedade (key) dentro da colecao de valores (objeto))
console.log(gabriel);

//Objetos e Funcoes
console.log(`*******Objetos e Funcoes*******`)


// const pessoa = {
//   nome: `Gabriel Victorino`,
//   idade: 25,
  
//   // //Declaracao de Funcao (modo1)
//   // mostrarNomeIdade: function(){
//   //   console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade} anos.`)
//   // }
// };

// pessoa.mostrarNomeIdade = function(){
//   console.log(`Meu nome e ${this.nome} e tenho ${this.idade} anos.`)
// };

//--------------------------------------------------------------------

// pessoa.mostrarNomeIdade();

// Tambem podemos acessas os valores das key por meio de atributos, confira:
const pessoa = {
  nome: `Gabriel`,
  idade: 25,
  altura: 1.80,

  informar: function(){
    console.log(`Seu nome e ${this.nome}, idade ${this.idade} anos e altura ${this.altura} m.`)
  }
}

//Objeto literal recebendo o valor `idade`
const atributo = `nome`


console.log(`Seu nome e ${pessoa[atributo]}.`)//Mostra a idade

// notcao (substituir valores)

pessoa.nome = `Gabriel`;//Acesso direto
pessoa[`nome`] = `Gabriel`;//Dinamico
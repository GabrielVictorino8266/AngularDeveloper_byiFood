// 2 Crie uma classe para Pessoas.
// Cada pessoa tem nome, peso e altura. As pessoas dizem o valor do seu IMC. Instancie uma pessoa chamada Gabriel, o qual possui 70Kg e tenha 1.75 de altura e que diga o valor de seu imc.

class Pessoa{
  // Atributos
  nome;
  peso;
  altura;

  constructor(nome,peso,altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  };

  calcularImc(){
    return this.peso/(this.altura**2);
  }

  classificarImc(){
    const imc = this.calcularImc();

    if(imc < 18.5){
      return `Magreza`
    }else if(imc < 24.9){
      return `Normal`
    }else if(imc < 29.9){
      return `Sobrepeso`
    }else{
      return `Obesidade`
    };
  };

};

const Gabriel = new Pessoa(`Gabriel`,20,1.75);

console.log(`Seu IMC e ${(Gabriel.calcularImc().toFixed(2))}`);

console.log(`Voce foi classificado como ${Gabriel.classificarImc()}!`)
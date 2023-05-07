/* Crie uma classe para CARROS.
Carros possuem marcas, cor e gasto medio de combustivel por Km rodado.
Crie um metodo que dado a quantidade de KM e preco de Combustivel, nos retorne o valor gasto em reais para realizar este percurso.
*/

class Carro {
  marca;//Define a marca do carro.
  cor;//Define a cor do carro.
  qtdeLitrosKm;//Qtde de Km gasto a cada 1 Litro de Combustivel.
  // kmRodados;//Qtde de Km rodados pelo veiculo.

  //Ao instanciar (criar)
  constructor(marca, cor, qtdeLitrosKm, /*kmRodados*/){
    this.marca = marca;
    this.cor = cor;
    this.qtdeLitrosKm = qtdeLitrosKm;
    // this.kmRodados = kmRodados;
  }


  calcularGasto(kmRodados, precoCombustivel){
    //calcula o gasto (Km / KmLitro) * combustivel
    let calculo = ((kmRodados / this.qtdeLitrosKm) * precoCombustivel);//Divide a qtde Rodado por Km feito com 1 Litro. * o preco do combustivel

   return(`Seu carro da marca ${this.marca}, da cor ${this.cor} que faz ${this.qtdeLitrosKm}Km a cada 1 litro, gastou R$${calculo} ao rodar ${kmRodados}Km na estrada.`);
  };
};


const Escort93 = new Carro(`Fiat Uno`, `Vermelho`,15);
console.log(Escort93.calcularGasto(60,10));
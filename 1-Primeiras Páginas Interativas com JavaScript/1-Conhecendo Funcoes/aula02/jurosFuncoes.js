// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// - À vista Débito, recebe 10% de desconto;
// - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

// function verificar forma PGTO (pgto, valor)
function calcular(formaPgto, valorProduto){
  pgto = formaPgto;
  switch (true) {
    case pgto == `debito`:
      return valorProduto*0.9;

    case pgto == `pix`:
      return valorProduto * 0.85;

    case pgto == `parcela2`:
      return valorProduto/2;
    default:
      //Multiplas opcoes
      return valorProduto*1.10
  }
};

function main (){
  const valorProduto = 10;
  const formaPgto = `multiplos`//debito,pix,parcelado2Vezesx,multiplos(opcao padrao).

  console.log(`O valor de R$ ${valorProduto} sera de R$ ${calcular(formaPgto, valorProduto)}.`);
};

main();//Executa o programa.
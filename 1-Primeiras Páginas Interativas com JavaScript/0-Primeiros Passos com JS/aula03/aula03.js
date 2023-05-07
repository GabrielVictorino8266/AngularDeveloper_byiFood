console.log('************************************************')
console.log('Exercicio 01 - MEDIA')
console.log(' ')
// 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

// Média = (nota 1 + nota 2 + nota 3) / 3;

// Classificação:
// - Média menor que 5, reprovação;
// - Média entre 5 e 7, recuperação;
// - Média acima de 7, passou de semestre;

const nota1 = 10,
      nota2 = 4,
      nota3 = 8;

let media;

media = (nota1+nota2+nota3) / 3;

// Media menor que 5
if (media < 5) {
  console.log('Reprovado.');
} else if(media >= 5 && media <= 7) {
  // Maior que 5 e menor que 7
  console.log('Recuperacao.');
}else{
  // Maior que 7
  console.log('Aprovado.') 
};


console.log('************************************************')
console.log('Exercicio 02 - IMC')
console.log(' ')
// 2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

// Formula do IMC:
// IMC = peso / (altura * altura)

// Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

// IMC em adultos Condição:
// - Abaixo de 18.5 Abaixo do peso;
// - Entre 18.5 e 25 Peso normal;
// - Entre 25 e 30 Acima do peso;
// - Entre 30 e 40 Obeso;
// - Acima de 40 Obsesidade Grave;

const peso = 80,
      altura = 1.80;

let imc;

imc = peso / (altura**2);//Alem disso, pode ser usado o Math.pow -> Potenciacao.

switch (true) {
  // Abaixo de 18.5
  case imc<18.5:
    console.log('ABAIXO PESO');
    break;
// Acima de 18.5
  case imc>=18.5:
    console.log('PESO NORMAL');
    break;
// Acima de 25
  case imc>25:
    console.log('ACIMA DO PESO');
    break;  

  default:
    break;
}

console.log('************************************************')
console.log('Exercicio 03 - Produto')
console.log(' ')

// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// - À vista Débito, recebe 10% de desconto;
// - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

const debito = false, //desconto 10%
      pix = false,   // desconto 15%
      duasParcelas = false, //Duas parcelas (sem juros)
      maisParcelas = true; //Mais parcelas (preco normal + 10% juros)

let precoProduto, qtdeParcelas;
precoProduto = 10.00;//Preco qualquer de um produto.
qtdeParcelas = 5;//Qtde de parcelas (quando for maior que duas.)

switch (true) {
    case debito === true://Qnd for debito
      console.log(`O preco sera R$ ${precoProduto * 0.9}`);//Desconto de 10%
      break;
    case pix === true://Qnd for pix ou a vista
      console.log(`O preco sera R$ ${precoProduto * 0.85}`)
      break;
    case duasParcelas === true://Qnd for parcelado em 2x
      console.log(`O preco parcelado em 2x sera de R$ ${precoProduto / 2} cada parcela.`);
      break;
    case maisParcelas === true://Qnd for mais de 2x
      console.log(`O preco final sera R$ ${precoProduto * 1.10} e cada parcela sera R$ ${(precoProduto * 1.10) / qtdeParcelas}`)
      break;

    default://Ocorrencia padrao -> Nada
      break;
}
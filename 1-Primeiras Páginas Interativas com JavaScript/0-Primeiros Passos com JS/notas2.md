# Trabalhando com Estruturas Condicionais e Dados Booleanos

Muitas vezes na nossa vida precisamos dizer "Sim" ou "Nao" para várias coisas. Na programação, quando resolvemos problemas, também fazemos o mesmo. Veja o seguinte exemplo,

```javascript
// //1
 const camisetaGabrielVermelha = true;
// //0
 const camisetaFernandoVermelha = false;
```

No código acima estamos falando que Gabriel **TEM (true)** uma camisa Vermelha e que Fernando **NAO TEM (false)** uma camisa da mesma cor.

## Estrutura Condicional IF

Durante o nosso cotidiano é comum nos encontrarmos em situações que precisamos comparar coisas. Por exemplo, o tipo de ccombustível que vamos usar, se algo é maior do que outra coisa, etc. Bom, para fazer isso, usamos uma **estrutura condicional** (compara coisas.)

Confira um exemplo abaixo:

```javascript
const numero = 10;//Define o Numero
const numeroPar = numero % 2 === 0;//Armazena em booleano se e par ou nao (true or false)

console.log(numeroPar);//mostra o output.

//Estrutura if para comparar o resultado da operacao e indicar se o Numero e Par ou Impar.
if (numeroPar) {
  console.log("Par");
}else{
  console.log("Impar");
};
```



## Observações da Aula

Para usar bool data types em estruturas condicionais, fazemos uso de operadores de comparação. ConfiraÇ

```javascript
// Operador "%" e o resto da divisao (0 e Par e 1 e Impar)
// Quando usamo ==(ignora o tipo da variavel(comparar texto com numero ocorre)) e o mesmo que === (nao ignora o tipo (comparar texto com numero nao ocorre))
```

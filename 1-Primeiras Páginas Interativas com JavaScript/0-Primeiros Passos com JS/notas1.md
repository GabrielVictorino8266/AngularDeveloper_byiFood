# Anotações da Aula 1

Variaveis são espaços na memória que permitem armazenar valores. Para criar uma variável, usaremos o **let**, embora também seja possível usarmos o **var** (old case). Veja abaixo:

```javascript
let variavel = 20

console.log(variavel)
```



Confira mais este exemplo, só que com várias variáveis:

```javascript
let user = 'John';
let age = 25;
let message = 'Hello';
```

Existe uma maneira mais "limpa" de declará-las, confira:

`Usamos o Let apenas 1 vez e depois declaramos a variavel e atribuimos valores respectivos.`

```javascript
let user = 'John',
  age = 25,
  message = 'Hello';
```

Por fim, vale ressaltar que o >`console.log` apresentado anteriormente, serve para exibir no prompt de comando (cli) as operações.


**Usando o CONST**

```javascript
const variavel = 20;

console.log(variavel);

variavel = 10;

console.log(variavel);
```

***O CONST é um valor invariável, ou seja, não muda durante o programa.


---



# Desafio da Aula 1

Calcule o gasto de uma viagem de carro com as seguintes informaçõesÇ

**3 Variaveis** serao necessarias:

- [X] Preço do Combustível.💲
- [X] Valor gasto pelo veículo com 1 Litro de combustível.💧
- [X] Distância em Km da viagem realizada pelo veículo.🚗

Por fim, print o resultado na tela.

```javascript
console.log("Consumo de Combustivel")
// Declaraoes das variaveis
let kmDistanciaCarro, distViagem;

// Preco do Combustivel por Litro
const precoComb = 5.4833333333333;
// Km feita pelo carro
kmDistanciaCarro = 15;
// Distancia da viagem (em KM)
distViagem = 30;


calculo = (distViagem / kmDistanciaCarro) * precoComb;


console.log(`O gasto da viagem foi de R$ ${calculo}`);
```


## Extras aula 1

```javascript
//sem usar variavel
console.log(`O gasto da viagem foi de R$ ${(distViagem / kmDistanciaCarro) * precoComb}`);
//Com arredondamento de numeros (toFixed)
console.log(`O gasto da viagem foi de R$ ${calculo.toFixed(2)}`);
```

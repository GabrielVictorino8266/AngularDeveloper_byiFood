# Importando Arquivos

Quando estamos criando programas, uma boa prática é separarmos e isolarmos alguns arquivos/funções. Para importar, usamos o REQUIRE, veja:

```javascript
//Importando um objetos com funcoes get e print
const funcoes = require(`./funcoes_auxiliares`);
```

Antes de importarmos, precisamos exportar o modulo indicado. Ceja como podemos exportar.

```javascript
//Exportando objetos com funcoes gets e print
module.exports = {gets, print};
```

Assim, no arquivo main.js, podemos acessar as funcoes que estao em outro arquivo (separado e melhor estruturado).

```javascript
//Importando um objetos com funcoes get e print
const funcoes = require(`./funcoes_auxiliares`);

//Executa a funcao gets do objeto funcoes que requere(importa) objetos do arquivo funcoes_auxiliares.
console.log(funcoes.gets());
```


# Desestruturacao de Objetos

A desestruturação de objetos em JavaScript é uma forma de extrair valores de um objeto e atribuí-los a variáveis separadas. É uma sintaxe que permite que você escreva um código mais conciso e legível.

```javascript
//Esta e uma maneira mais organizada.
const { nome } = pessoa;

//Recebe o atributo nome e sua propriedades da classe pessoa.
const nome = pessoa.nome
```

Veja mais um exemplo da desestruturacao de objetos:

```javascript
const pessoa = {
  nome: `vitor`,
  idade: 25,
  profissao: `Tecnico de Enfermagem`
}

const { nome, idade, profissao } = pessoa
```

# Obervações

Da primeira vez, o javascript vai ler todo o conteúdo a ser importado e prepará-lo. Se ele for requisitado novamente, ele já estará em `Cache`.

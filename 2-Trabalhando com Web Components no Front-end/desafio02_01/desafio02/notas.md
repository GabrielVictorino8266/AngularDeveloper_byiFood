# Rodando Codigo TypeScript

Podemos rodar ele por

> npx tsc src/index.ts

Assim, ele criou um arquivo com a mesma funcionalidade, mas em JS.

# Configurando O TypeScript para ser Executado.

Uma maneira simples de executar arquivos typescript é criar um arquivo de configuração, confira:

> npx tsc --init

A linha de código acima cria um arquivo de configuração pré-configurada.

Para saber o que podemos alterar e compreender, vamos na referência da linguagem em TSConfig Reference. Para saber mais, acesse:

> https://www.typescriptlang.org/tsconfig
>
> https://www.typescriptlang.org/play

# Para executar TUDO de uma só vez

Podemos fazer o seguinte, 

```js
  "scripts": {
    "start":"npx tsc && node build/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
```

Adicionamos o script "start" e passamos os comandos que utilizamos, que são:

> npx tsc -> transpila para js
>
> node build/index.js -> executa o codigo em index.js

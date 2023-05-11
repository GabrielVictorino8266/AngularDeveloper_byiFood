# Conhecendo o TypeScript

O TypeScript permite que o JavaScript seja expandido, adicionando mais coisas (tunado), com recursos extras, como "TIPAR O JS", ou seja, definir tipos para variáveis. Também permite criar INTERFACES, ENUMS... O código, no final, será transpilado para JavaScript, trabalho feito pelo NODE.JS, tornando mais fácil e previsível.

Veja um exemplo:

```js
// Exemplo em JS
function ligar(heroi) {
  console.log("Ligando para :" + heroi.telefone)
}

ligar({
  nome: "Steve Rogers",
  vulgo: "Capitao America",
  // telefone: "11 11111111",
})

// Output: undefined
```

Já quando usamos o TypeScript, ele oferecerá o erro antes da compilação:

```typescript
type hero = {
  //cria a tipagem
  nome: string
  vulgo: string
  telefone: string
}

function ligarPara(heroi: hero) {
  // herda a tipage de "hero" para "heroi"
  console.log(`Ligando para ${heroi.telefone}`)
}

ligarPara({
  nome: "Steve Rogers",
  vulgo: "Capitao America",
  telefone: "33 3333-3333",
})
```

> O TypeScript oferece um **erro em tempo de desenvolvimento**, ou seja, enquanto o código é escrito ele apresenta erros, principalmente, quando **relacionado a tipos**.

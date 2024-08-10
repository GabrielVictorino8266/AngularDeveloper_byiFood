# Trabalhando com Tipos de Variáveis

Os tipos primitivos são:

> boolean, number e string

Para sua declaração, usamos:

```typescript
let ligado:boolean = false // Variável tipada, não permite outro tipo de dado
let ligado = false // Informa o tipo, mas não é tipada, então permite trocar para outro, exemplo "let ligado = 1"
```

Também temos os **TIPOS ESPECIAIS**, veja:

```typescript
//Tipos especiais:

//undefined
let nulo: null = null; // Nao permite ninguem alterar seu valor
let indefinido: undefined =  undefined // So permite usar o undefined
```

Por fim, os tipos abrangentes são dois, o Any e o VoidÇ

> O Void aceita apenas Void que é "vazio"
>
> O Any aceita qualquer tipo de dado

```typescript
// Tipos Abrangentes
function executa(): void{} // Uma funcao ou coisas que nao tem retorno

let retornoView: any = "felipe" // Aceita qualquer tipo (number, string, boolean)

```

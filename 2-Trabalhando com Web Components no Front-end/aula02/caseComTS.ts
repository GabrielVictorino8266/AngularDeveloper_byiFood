type hero = {
  //cria a tipagem
  nome: string
  vulgo: string
  telefone: any
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

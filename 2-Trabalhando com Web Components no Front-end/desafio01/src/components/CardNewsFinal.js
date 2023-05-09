class CardNews extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: "open" })
    shadow.appendChild(this.build())
    shadow.appendChild(this.styles())
  }

  build() {
    // Contrói os Elementos
    const componentRoot = document.createElement("div") // Cria o componente principal
    componentRoot.setAttribute("class", "card") // Indica a propriedade classe recebe o nome de "card"

    const cardLeft = document.createElement("div")
    cardLeft.setAttribute("class", "card__left")

    const cardRight = document.createElement("div")
    cardRight.setAttribute("class", "card__right")

    componentRoot.appendChild(cardRight)
    componentRoot.appendChild(cardLeft) // Indica que sao filhos do componente Root
    return componentRoot
  }

  styles() {
    // Aplica os estilos
  }
}

customElements.define("card-news", CardNews)

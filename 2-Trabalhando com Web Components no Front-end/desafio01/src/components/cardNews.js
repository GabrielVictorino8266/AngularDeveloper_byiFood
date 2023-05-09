class CardNews extends HTMLElement {
  // Aqui, estamos criando um molde (a classe) que funciona como elementos HTML
  constructor() {
    super() // Chama o construtor do HTMLElement

    const shadow = this.attachShadow({ mode: "open" })
    shadow.innerHTML = "<h1>Hello World!</h1>"

    
  }
}

customElements.define("card-news", CardNews)

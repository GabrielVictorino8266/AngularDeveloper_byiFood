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

    const autor = document.createElement("span")
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous") // precisa do () para poder indicar que e uma operacao so

    const linkTitle = document.createElement("a")
    linkTitle.textContent = this.getAttribute("title") // Pega os valores passados por title = ""
    linkTitle.href = this.getAttribute("urlTitle")

    const newsContent = document.createElement("p")
    newsContent.textContent = this.getAttribute("content")

    cardLeft.appendChild(autor) // Indica que sera um no de Card Left
    cardLeft.appendChild(linkTitle) // Indica que sera um no de Card Left
    cardLeft.appendChild(newsContent) // Indica que sera um no de Card Left

    const cardRight = document.createElement("div")
    cardRight.setAttribute("class", "card__right")

    const newsImage = document.createElement("img")
    cardRight.appendChild(newsImage)
    newsImage.src = this.getAttribute("photo") || "./assets/default.png"
    newsImage.alt = "Imagem da Noticia"

    componentRoot.appendChild(cardLeft) // Indica que sao filhos do componente Root
    componentRoot.appendChild(cardRight)

    return componentRoot
  }

  styles() {
    // Aplica os estilos
    const style = document.createElement("style")
    style.textContent =
    `
      .card {
        width: 80%;
        box-shadow: 2px 2px 20px 3px #565656;
        display: flex;
        flex-direction: row;

        justify-content: space-between;
      }

      .card__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
      }

      .card__left > span {
        font-weight: 500;
      }

      .card__left > h1 {
        margin-top: 15px;
        font-size: 25px;
      }

      .card__left > h1 > a {
        text-decoration: none;
        color: black;
      }

      .card__left > p {
        background-color: rgba(53, 53, 53, 0.027);
        border-radius: 8px;
      }

      img {
        height: 220px;
        width: auto;
      }
    `

    return style
  }
}

customElements.define("card-news", CardNews)

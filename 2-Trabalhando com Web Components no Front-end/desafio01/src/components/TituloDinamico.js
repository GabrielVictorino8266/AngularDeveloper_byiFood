class TituloDinamico extends HTMLElement {
  constructor() {
    super() // Chama o construtor do HTMLElement

    const shadow = this.attachShadow({ mode: "open" })

    // Base do componente <h1>Gabriel</h1>
    const componentRoot = document.createElement("h1")
    // componentRoot.textContent = `Minha Noticia`
    componentRoot.textContent = this.getAttribute("titulo")

    // Estilizar o componente
    const style = document.createElement("style")
    style.textContent = `
    h1{
      color: green;
      font-family: "Segoe UI";
    }
    `

    // Enviar para a shadow
    shadow.appendChild(componentRoot) // adiciona component a nossa arvore
    shadow.appendChild(style) // adiciona style a nossa arvore
  }
}

customElements.define("titulo-dinamico", TituloDinamico) // o nome precisa acompanhar "-"

// Os estilos são únicos para os componentes (Scopets)
// Os estilos são únicos para os componentes (Scopets)

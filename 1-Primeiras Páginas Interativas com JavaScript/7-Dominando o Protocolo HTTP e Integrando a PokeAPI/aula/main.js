// const offset = 0
// const limit = 10
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//O fetch fara a requisicao e exibira os dados com o then

//Processamento assincrono
// fetch(url)
//   .then(function (response) {
//     response.json().then(function (responseBody) {
//       console.log(responseBody)
//     }) //Converte o Objeto

//   })
//   .catch(function (error) {
//     console.log(error)
//   })
//   .finally(function () {
//     console.log(`Requisicao Concluida`)
//   })

// Nao usando arrow functions
// fetch(url)
//   .then(function (response) {
//     return response.json() //retorna uma promise
//     // return `10`
//   })
//   .then(function (jsonBody) {
//     console.log(jsonBody) //retorna uma string para : retur `10`
//     //Para o outro, retorna o body convertido
//   })
//   .catch(function (error) {
//     console.log(error)
//   })
//   .finally(function () {
//     console.log(`Requisicao Concluida`)
//   })

// Usando arrowFunctions
// fetch(url)
//   .then((response) => response.json())
//   .then((jsonBody) => console.log(jsonBody))
//   .catch((error) => console.log(error))
// .finally(() => console.log(`Requisicao Concluida`))

// Conceitos da Aula: Manipulando o resultado da requisição através de uma Promise
// Encadeamento de thens
// arrow functions

function converterPokemonHtml(pokemon) {
  return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
              <ul class="types">
                <li class="type">Grass</li>
                <li class="type">Poison</li>
              </ul>

              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}"
              />
            </div>
          </li>
        `
}

const pokemonsList = document.getElementById(`pokemonsList`)

// fetch(url)
//   .then((response) => response.json())
//   .then((jsonBody) => jsonBody.results)
pokeApi.getPokemons().then((pokemons) => {
  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i]
    // console.log(converterPokemonHtml(pokemon))
    pokemonsList.innerHTML += converterPokemonHtml(pokemon)
  }
})
// .catch((error) => console.log(error))

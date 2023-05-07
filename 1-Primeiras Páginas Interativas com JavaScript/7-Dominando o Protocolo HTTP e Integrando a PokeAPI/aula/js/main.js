const pokemonsList = document.getElementById(`pokemonsList`)
const loadMoreButton = document.getElementById(`loadMoreButton`)

const limit = 5
let offset = 0

const maxRecords = 10

// pokeApi.getPokemons().then((pokemons = []) => {
//   const newHtml = pokemons.map(converterPokemonHtml).join(``)
//   pokemonsList.innerHTML += newHtml

//   // Juntar os elementos sem separador
//   // const newHtml = novaLista.join(``)

//   // console.log(novaLista)
// })

// // Substituido pelo MAP acima
// //   listItems = []

// //   for (let i = 0; i < pokemons.length; i++) {
// //     const pokemon = pokemons[i]
// //     // listItems.push(converterPokemonHtml(pokemon))
// //   }
// //   console.log(listItems)
// // })

// // Aqui, criamos uma nova lista e adicionamos os elementos (li) nela e rendereizamos no final (tudo de uma vez), porém aqui vamos usar o map

function loadPokemonItems(offset, limit) {
  // function converterPokemonHtml(pokemon) {
  //   return `
  //       <li class="pokemon ${pokemon.type}">
  //           <span class="number">#${pokemon.numero}</span>
  //           <span class="name">${pokemon.nome}</span>

  //           <div class="detail">
  //             <ul class="types">
  //               ${pokemon.types
  //                 .map((type) => `<li class="type ${type}">${type}</li>`)
  //                 .join(``)}
  //             </ul>

  //             <img
  //               src="${pokemon.foto}"
  //               alt="${pokemon.nome.toUpperCase()}"
  //             />
  //           </div>
  //         </li>
  //       `
  // }
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) => `
        <li class="pokemon ${pokemon.type}">
             <span class="number">#${pokemon.numero}</span>
             <span class="name">${pokemon.nome}</span>

            <div class="detail">
               <ul class="types">
                ${pokemon.types
                  .map((type) => `<li class="type ${type}">${type}</li>`)
                  .join(``)}
              </ul>

              <img
                src="${pokemon.foto}"
                alt="${pokemon.nome.toUpperCase()}"
              />
            </div>
          </li>
        `
      )
      .join(``)
    pokemonsList.innerHTML += newHtml
  })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener(`click`, () => {
  offset += limit

  const qtdRecordNextPage = offset + limit

  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset
    loadPokemonItems(offset, newLimit)

    loadMoreButton.parentElement.removeChild(loadMoreButton)
  } else {
    loadPokemonItems(offset, limit)
  }
})

const pokeApi = {}

function converterPokeAPiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon()
  pokemon.numero = pokeDetail.id
  pokemon.nome = pokeDetail.name

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types

  pokemon.types = types
  pokemon.type = type

  pokemon.foto = pokeDetail.sprites.other.dream_world.front_default

  return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(converterPokeAPiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  return (
    fetch(url)
      .then((response) => response.json())
      .then((jsonBody) => jsonBody.results) //cria a lista de pokemons
      // .catch((error) => console.log(error))
      .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) //Convertamos a lista em uma nova lista de requisicoes de detalhes
      .then((detailsRequests) => Promise.all(detailsRequests)) // Cria a lista de detalhes em JSON
      .then((pokemonsDetails) => pokemonsDetails)
  )
}

// Promise.all([
//   //Aguarda as requisicoes finalizarem
//   fetch(`https://pokeapi.co/api/v2/pokemon/1`),
//   fetch(`https://pokeapi.co/api/v2/pokemon/2`),
//   fetch(`https://pokeapi.co/api/v2/pokemon/3`),
//   fetch(`https://pokeapi.co/api/v2/pokemon/4`),
// ]).then((results) => {
//   console.log(results)
// })

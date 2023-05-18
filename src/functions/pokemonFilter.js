export const pokemonFilter = (name, pokemons, setPokemons, setCurrentPage, getPokemons) => {
    
  if(name === ""){
    getPokemons(setPokemons)
  } else {
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.data.name.includes(name));
    setPokemons(filteredPokemons);
    setCurrentPage(1);
  }
}

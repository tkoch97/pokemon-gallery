export const pokemonFilter = (name, setPokemons, pokemons, getPokemons) => {

  var filteredPokemons = [];

  if(name === ""){
    getPokemons(setPokemons)
  }

  for(var i in pokemons) {
    if(pokemons[i].data.name.includes(name)) {
      filteredPokemons.push(pokemons[i]);
      setPokemons(filteredPokemons);
    }
  }

}
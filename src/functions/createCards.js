import { Box, Grid } from "@mui/material";
import LoadAnimation from '../components/loading';
import PokemonCard from '../components/pokemonCard';


export const createCards = (pokemons, currentPage, cardsPerPage) => {

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = pokemons.slice(startIndex, endIndex);

  if(visibleCards.length === 0) {
    return <Box className='loadBox' style={{position: 'fixed', left:'50%', top: '50%'}}><LoadAnimation /></Box>
  }

  return (visibleCards.map((pokemon, key) => (
    <Grid  className='pokeCard' item xs={12} sm={6} md={4} lg={2} key={key}> 
      <PokemonCard name={pokemon.data.name} 
      img={pokemon.data.sprites.front_default}
      types={pokemon.data.types}
      />
    </Grid>
  )))

}
import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import NavBar from '../components/navBar';
import PokemonCard from '../components/pokemonCard';
import { getPokemons } from '../functions/getPokemons';
import LoadAnimation from '../components/loading';

export const Home = () => {
  
  const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
      getPokemons(setPokemons);
    }, [])

    const pokemonFilter = (name) => {

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

    const createContent = () => {

      if(pokemons.length === 0) {
        return <Box className='loadBox' style={{position: 'fixed', left:'46%', top: '50%'}}><LoadAnimation /></Box>
      }

      return (pokemons.map((pokemon, key) => (
        <Grid  className='pokeCard' item xs={12} sm={6} md={4} lg={2} key={key}>
          <PokemonCard name={pokemon.data.name} 
          img={pokemon.data.sprites.front_default}
          types={pokemon.data.types}
          />
        </Grid>
      )))

    }

  return (
    <div>
      <header>
        <NavBar className='navBar' style={{}} pokemonFilter={pokemonFilter} />
      </header>

      <Container maxWidth='xg'>

        <div className='gallery'>

          <Grid className='grid' container spacing={3} style={{textAlign: 'center'}}>
            
            {createContent()}

          </Grid>

        </div>

      </Container>
    </div>

  );

}
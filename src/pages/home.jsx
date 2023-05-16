import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import NavBar from '../components/navBar';
import PokemonCard from '../components/pokemonCard';
import { getPokemons } from '../functions/getPokemons';

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

  return (
    <div>
      <header>
        <NavBar className='navBar' pokemonFilter={pokemonFilter} />
      </header>

      <main className='dashboard'>

        <div className='gallery'>

          <Grid className='grid' container>

            {pokemons.map((pokemon, key) => (
              <Grid  className='pokeCard' item xs={2} key={key}>
                <PokemonCard name={pokemon.data.name} 
                img={pokemon.data.sprites.front_default}
                types={pokemon.data.types}
                />
              </Grid>
            ))}


          </Grid>

        </div>

      </main>
    </div>

  );

}
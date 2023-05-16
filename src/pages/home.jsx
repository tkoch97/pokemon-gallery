import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import NavBar from '../components/navBar';
import PokemonCard from '../components/pokemonCard';

export const Home = () => {
  
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
      getPokemons();
    }, [])
    

    const getPokemons = () => {

      const endPoints = [];
      for (var i = 1; i < 11; i++ ) {
        endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }

      const endPointsResponses = axios.all(endPoints.map((endPoint) => axios.get(endPoint)))
      .then((resp) => setPokemons(resp))
      .catch((error) => console.log(error));
    };


  return (
    <div>
      <header>
        <NavBar className='navBar' />
      </header>

      <main className='dashboard'>

        <div className='gallery'>

          <Grid className='grid' container>

            {pokemons.map((pokemon, key) => (
              <Grid  className='pokeCard' item xs={2} key={key}>
                <PokemonCard name={pokemon.data.name} 
                img={pokemon.data.sprites.front_default} />
              </Grid>
            ))}


          </Grid>

        </div>

      </main>
    </div>

  );

}
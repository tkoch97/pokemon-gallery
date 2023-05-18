import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import NavBar from '../components/navBar';
import { getPokemons } from '../functions/getPokemons';
import { createCards } from '../functions/createCards';
import { creatPagination } from '../functions/createPagination';

export const Home = () => {
  
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState([1]);
  const cardsPerPage = 10;
  
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



        <Container className='main'direction='column' maxWidth='xl'>
            <Grid className='grid' container spacing={2} direction='row' style={{textAlign: 'center', justifyContent: 'center'}}>
              
              {createCards(pokemons, currentPage, cardsPerPage)}

            </Grid>
        </Container>

        {creatPagination(pokemons, cardsPerPage, currentPage, setCurrentPage)}

    </div>

  );

}
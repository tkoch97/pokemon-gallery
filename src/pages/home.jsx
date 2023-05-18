import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import NavBar from '../components/navBar';
import { getPokemons } from '../functions/getPokemons';
import { createCards } from '../functions/createCards';
import { creatPagination } from '../functions/createPagination';
import { pokemonFilter } from '../functions/pokemonFilter';

export const Home = () => {
  
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState([1]);
  const cardsPerPage = 10;
  
    useEffect(() => {
      getPokemons(setPokemons);
    }, [])

  return (
    <div>
      <header>
        <NavBar className='navBar' pokemonFilter={(name) => pokemonFilter(name, pokemons, setPokemons, setCurrentPage, getPokemons)}/>
      </header>

        <Container className='main'direction='column' maxWidth='xl'>
            <Grid className='grid' container spacing={2} direction='row' style={{textAlign: 'center', justifyContent: 'center'}}>
              
              {createCards(pokemons, currentPage, cardsPerPage)}

            </Grid>
        </Container>

        <footer>
          <Box style={{margin:'3.0rem'}}>
          </Box>
          <Box style={{position:'', bottom:'0', left:'0', right:'0', textAlign:'center'}}>
            {creatPagination(pokemons, cardsPerPage, currentPage, setCurrentPage)}
          </Box>
        </footer>

    </div>

  );

}
import axios from "axios";

export const getPokemons = (setPokemons) => {

  const endPoints = [];
  for (var i = 1; i < 21; i++ ) {
    endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  }

  const endPointsResponses = axios.all(endPoints.map((endPoint) => axios.get(endPoint)))
  .then((resp) => setPokemons(resp))
  .catch((error) => console.log(error));
};
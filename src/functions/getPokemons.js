import axios from "axios";

export const getPokemons = (setPokemons) => {

  const endPoints = [];
  for (var i = 1; i < 51; i++ ) {
    endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  }

  axios.all(endPoints.map((endPoint) => axios.get(endPoint)))
  .then((resp) => setPokemons(resp))
  .catch(() => alert("Desculpe, houve algum erro inesperado."));
};
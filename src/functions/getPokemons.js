import axios from "axios";

export const getPokemons = (setPokemons) => {

  const endPoints = [];
  for (var i = 1; i < 201; i++ ) {
    endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  }

  axios.all(endPoints.map((endPoint) => axios.get(endPoint)))
  .then((resp) => setPokemons(resp))
  .catch(() => alert("Desculpe, houve algum erro inesperado ou um breve atraso no recebimento dos dados."));
};
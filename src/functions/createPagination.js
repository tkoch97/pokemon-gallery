import BasicPagination from "../components/pagination"

export const creatPagination = (pokemons, cardsPerPage, currentPage, setCurrentPage) => {
  if(pokemons.length > 0) {
      return(
        <BasicPagination
          count={Math.ceil(pokemons.length / cardsPerPage)}
          page={currentPage}
          onPageChange={(event, value) => setCurrentPage(value)}
        ></BasicPagination>
      )
    }
}
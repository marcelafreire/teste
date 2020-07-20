import React from "react";
import { Link } from "react-router-dom";


const SearchBar = ({ cars, handleSearch, search }) => {
  return (
      <header className="home__content__searchbar">
        <input
          type="text"
          name="search"
          value={search}
          placeholder="Pesquisar por um veículo"
          onChange={handleSearch}
        />
        <Link to='/car/add'>Cadastrar</Link>
        
              </header>
  );
};

export default SearchBar;

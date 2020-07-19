import React from "react";

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
        <button>Cadastrar</button>
      </header>
  );
};

export default SearchBar;

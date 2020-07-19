import React from "react";
import "../assets/styles/Shared.css";

const SearchBar = ({ cars, handleSearch, search }) => {
  return (
      <header>
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

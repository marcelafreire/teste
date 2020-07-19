import React, { useState, useEffect } from "react";
import axios from "axios";
import CarSeachList from "./car-search-list";
import SearchBar from "../components/search-bar";


const Home = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const url = "http://localhost:4000/cars";

  useEffect(() => {
    const getAllCars = () => {
      axios
        .get(url)
        .then((response) => {
          setCars(response.data);
        })
        .catch((err) => console.log("erro na chamada"));
    };

    getAllCars();
  }, [search, setSearch]);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <>
        <SearchBar search={search} handleSearch={handleSearch} />
        <CarSeachList cars={cars} handleSearch={handleSearch} search={search} />
        </>
  );
};

export default Home;

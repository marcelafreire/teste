import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/search-bar";
import { Link } from "react-router-dom";



const AddCar = () => {
  const url = `http://localhost:4000/cars/`;
  const [car, setCar] = useState({
    title: "",
    model: "",
    year: "",
    color: "",
    brand: "",
    km: "",
    price: "",
  });

  const [msgSuccess, setMsgSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(url, car)
    .then(() => { 
      setCar("");
      setMsgSuccess(true) }) 
    .catch((err) => {console.log('erro no cadastro')})
  }

  const handleChange = (e) => {
    e.persist();
    const value = e.target.value;
    setCar({
      ...car,
      [e.target.name]: value,
    });
  }



  return (
    <div className="main-home">
    <SearchBar />
    <div className="home__content__cars">
      <h1>Adicionar novo Carro</h1>
      <div>
      {msgSuccess && (
              <span className="msg">
                Carro adicionado com sucesso!
              </span>
            )}

      </div>
      <form className="form">
        <input
        placeholder="Título"
        id="title"
          type="text"
          name="title"
          value={car.title} 
          onChange={handleChange}
          required
        />

        <input
        placeholder="Marca"
          type="text"
          name="model"
          value={car.model}
          required
          onChange={handleChange}
        />

        <input
        placeholder="Ano"
          type="number"
          name="year"
          value={car.year}
          required
          onChange={handleChange}
        />
          <input className="form__input-brand"
          placeholder="Modelo"
          type="text"
          name="brand"
          value={car.brand}
          required
          onChange={handleChange}
        />

        <input
        placeholder="Cor"
          type="text"
          name="color"
          value={car.color}
          required
          onChange={handleChange}
        />

        <input
        placeholder="preço"
          type="number"
          name="price"
          value={car.price}
          required
          onChange={handleChange}
        />

        <input
          placeholder="Kilometragem"
          type="number"
          name="km"
          value={car.km}
          required
          onChange={handleChange}
        />
         <div className="form__btn">
         <Link to="/">Cancelar</Link>
        <div>
        <button className="btn-salvar" onClick={handleSubmit}>Salvar</button>
        </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddCar;

import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/search-bar";
import { Link } from "react-router-dom";


const CarDetails = (props) => {
  const idCar = props.match.params.id;
  const url = `http://localhost:4000/cars/${idCar}`;

  const [msgSuccess, setMsgSuccess] = useState(false);
  const [msgError, setMsgError] = useState(false);

  const [car, setCar] = useState({
    title: "",
    model: "",
    year: "",
    brand: "",
    color: "",
    km: "",
    price: "",
  });

  const handleDelete = () => {
    axios
      .delete(url)
      .then(() => props.history.push("/"))
      .catch((err) => console.log("não deletou"));
  };

  const handleChange = (e) => {
    let value = e.target.value;
    setCar({
      ...car,
      [e.target.name]: value,
    });
    console.log(value, "value");
  };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCar(res.data);
      })
      .catch((error) => console.log("erro na chamada"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(url, car)
      .then((res) => {
        {
          setMsgSuccess(true);
        }
        setTimeout(() => {
          props.history.push("/");
        }, 2000);
      })
      .catch((err) => {
        setMsgError(true);
      });
  };

  console.log(car.title, "car title");

  return (
    <div className="main-home">
      <SearchBar />
      <div className="home__content__cars">
        <div>
          {msgSuccess && (
            <span className="msg">Dados atualizados com sucesso!</span>
          )}
          {msgError && (
            <span className="msg">
              Problemas ao salvar o formulário.
            </span>
          )}
        </div>
        <form className="form">
          <input
            id="title"
            type="text"
            name="title"
            value={car.title}
            onChange={(e) => handleChange(e)}
            required
          />

          <input
            type="text"
            name="model"
            value={car.model}
            required
            onChange={handleChange}
          />

          <input
            type="number"
            name="year"
            value={car.year}
            required
            onChange={handleChange}
          />

          <input
            className="form__input-brand"
            type="text"
            name="brand"
            value={car.brand}
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="color"
            value={car.color}
            required
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            value={car.price}
            required
            onChange={handleChange}
          />

          <input
            type="number"
            name="km"
            value={car.km}
            required
            onChange={handleChange}
          />

          <div className="form__btn">
            <div>
              <button onClick={handleDelete}>Remover</button>
              <Link to="/">Cancelar</Link>
            </div>
            <button className="btn-salvar" onClick={handleSubmit}>Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarDetails;

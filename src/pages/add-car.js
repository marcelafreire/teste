import React, { useState } from "react";
import "../assets/styles/Shared.css";
import axios from "axios";


const AddCar = () => {
  const url = `http://localhost:4000/cars/`;
  const [car, setCar] = useState({
    title: "",
    model: "",
    year: "",
    color: "",
    km: "",
    price: "",
  });

  // const [title, setTitle] = useState("");
  // const [model, setModel] = useState("");
  // const [brand, setBrand] = useState("");
  // const [year, setYear] = useState("");
  // const [color, setColor] = useState("");
  // const [km, setKm] = useState("");
  // const [price, setPrice] = useState("");
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
      <h1>Adicionar novo Carro</h1>
      <form>
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
          name="brand"
          value={car.brand}
          required
          onChange={handleChange}
        />

        <input
        placeholder="Ano"
          type="text"
          name="year"
          value={car.year}
          required
          onChange={handleChange}
        />
          <input
          placeholder="Modelo"
          type="text"
          name="model"
          value={car.model}
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
          type="text"
          name="price"
          value={car.price}
          required
          onChange={handleChange}
        />

        <input
          placeholder="Kilometragem"
          type="text"
          name="km"
          value={car.km}
          required
          onChange={handleChange}
        />
        <button>Cancelar</button>
        <div>
        <button onClick={handleSubmit}>Salvar</button>
        </div>
      </form>

      {msgSuccess && (
              <span className="login__error" data-testid="user-error">
                Carro adicionado com sucesso!
              </span>
            )}

    </div>
  );
};

export default AddCar;

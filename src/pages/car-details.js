import React, { useState, useEffect } from "react";
import "../assets/styles/Shared.css";
import axios from "axios";


const CarDetails = (props) => {
  const idCar = props.match.params.id;
  const url = `http://localhost:4000/cars/${idCar}`;

  const [title, setTitle] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");
  const [msgSuccess, setMsgSuccess] = useState(false)
  const [msgError, setMsgError] = useState(false)

  // const [car, setCar] = useState({
  //   title: "",
  //   model: "",
  //   year: "",
  //   color: "",
  //   km: "",
  //   price: "",
  // });


  const handleDelete = () => {
    axios.delete(url)
    .then(() => props.history.push('/'))
    .catch(err => console.log('não deletou'))
}

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setTitle(res.data.title);
        setModel(res.data.model);
        setBrand(res.data.brand);
        setYear(res.data.year);
        setColor(res.data.color);
        setKm(res.data.km);
        setPrice(res.data.price);
      })
      .catch((error) => console.log("erro na chamada"));

  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(url, {title, model, brand, year, color, km})
    .then((res) => {setMsgSuccess(true)})
    .catch((err) => {console.log(err)})
  }


  return (
    <div className="main-home">
      <h1>Car</h1>
      <form>
        <input
        placeholder="title"
        id="title"
          type="text"
          name="title"
          value={title} 
          onChange={(e) => console.log(setTitle(e.target.value))}
          required
        />

        <input
          type="text"
          name="brand"
          value={brand}
          required
          onChange={(e) => setBrand(e.target.value)}
        />

        <input
          type="text"
          name="year"
          value={year}
          required
          onChange={(e) => setYear(e.target.value)}
        />
          <input
          type="text"
          name="model"
          value={model}
          required
          onChange={(e) => setModel(e.target.value)}
        />

        <input
          type="text"
          name="color"
          value={color}
          required
          onChange={(e) => setColor(e.target.value)}
        />

        <input
          type="text"
          name="price"
          value={price}
          required
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          name="km"
          value={km}
          required
          onChange={(e) => setKm(e.target.value)}
        />
        
        <div>
        <button onClick={handleDelete}>Remover</button>
        <button>Cancelar</button>
        </div>

        <div>
        <button onClick={handleSubmit}>Salvar</button>
        </div>
      </form>

      {msgSuccess && (
              <span className="login__error" data-testid="user-error">
                Dados atualizados com sucesso!
              </span>
            )}
            {msgError && (
              <span className="login__error" data-testid="req-error">
                Dados inválidos
              </span>
            )}

    </div>
  );
};

export default CarDetails;

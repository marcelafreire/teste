import React, { useState, useEffect } from "react";
import axios from "axios";


const CarDetails = (props) => {
  const idCar = props.match.params.id;
  const url = `http://localhost:4000/cars/${idCar}`;

  const [msgSuccess, setMsgSuccess] = useState(false)
  const [msgError, setMsgError] = useState(false)

  const [car, setCar] = useState({
    title: "",
    model: "",
    year: "",
    color: "",
    km: "",
    price: "",
  });


  const handleDelete = () => {
    axios.delete(url)
    .then(() => props.history.push('/'))
    .catch(err => console.log('não deletou'))
}

const handleChange = (e) => {
  let value = e.target.value
  setCar({
    ...car,
    [e.target.name]: value,
  });
  console.log(value, 'value')
}

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
    axios.put(url, car)
    .then((res) => { {setMsgSuccess(true)} 
    setTimeout(() => {
      props.history.push('/')
    }, 2000);
  })
    .catch((err) => {console.log(err)})
  }

console.log(car.title, 'car title')

  return (
    <div className="main-home">
      <h1>Car</h1>
      <form>
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
          name="brand"
          value={car.brand}
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="year"
          value={car.year}
          required
          onChange={handleChange}
        />
          <input
          type="text"
          name="model"
          value={car.model}
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
          type="text"
          name="price"
          value={car.price}
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="km"
          value={car.km}
          required
          onChange={handleChange}
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

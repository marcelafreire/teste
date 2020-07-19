import React from "react";
import "../assets/styles/Shared.css";
import { Link } from "react-router-dom";

const CarSeachList = ({ cars, handleSearch, search }) => {
  return (
    <>
      {search === "" ? (
        <div className="banner">
          <h2>Pesquisa de veículos do TradersClub</h2>
        </div>
      ) : (
        <div className="banner">
          {cars
            .filter((car) => car.title.toLowerCase().includes(search))
            .map((car) => {
              return (
                <div key={car.id}>
                  <Link to={`/car/${car.id}`}>
                  <div>
                    <h3>{car.title}</h3>
                    <p>{car.model} • {car.brand} • {car.km}</p>
                    </div>
                    <div>
                      <h3>{car.price}</h3>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      )}
      </>
  );
};

export default CarSeachList;

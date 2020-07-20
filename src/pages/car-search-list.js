import React from "react";
import { Link } from "react-router-dom";

const CarSeachList = ({ cars, handleSearch, search }) => {
  return (
    <>
      {search === "" ? (
        <div className="home__content__banner">
          <h1>Pesquisa de veículos do TradersClub</h1>
        </div>
      ) : (
        <div className="home__content__cars">
          {cars
            .filter((car) => car.title.toLowerCase().includes(search))
            .map((car) => {
              return (
                <div key={car.id}>
                  <Link to={`/car/${car.id}`} className="search-list">
                    <div className="search-list__group" >
                      <h3>{car.title}</h3>
                      <p>{car.model} • {car.brand} • {car.km}
                      </p>
                    </div>

                    <div className="search-list__group2">
                      <h3>R${car.price}</h3>
                      <p>{car.year}</p>
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

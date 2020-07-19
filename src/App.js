import React from "react";
import { Route, Switch} from 'react-router-dom';    
import Home from "./pages/home";
import CarDetails from "./pages/car-details";
import AddCar from "./pages/add-car";

function App() {
  return (
    <div>
      <div className="home">
        <div className="menu">
          <h1>-</h1>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/car/add" component={AddCar} />
          <Route exact path="/car/:id" component={CarDetails}  />
        </Switch>
      </div>
    </div>
  );
}

export default App;

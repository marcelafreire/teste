import React from "react";
import { Route, Switch, Link} from 'react-router-dom';    
import Home from "./pages/home";
import CarDetails from "./pages/car-details";
import AddCar from "./pages/add-car";
import './assets/styles/style.css'
import logo from './assets/img/logo-tc.png';

function App() {
  return (
      <div className="home">
        <div className="home__side-bar">
          <Link to="/"><img src={logo}></img></Link>
        </div>
        <div className="home__content">
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

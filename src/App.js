import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PizzaForm from './components/pizza-form';
const App = () => {
  console.log("secret message")
  return (
    <div className="App">
    <header>
      <Link to="/">Home</Link>
      <Link to="/pizza-form/">Type</Link>
      </header>
      <Switch>
        <Route exact path="/">
        <h1>Okay Bloomer, Eat</h1>
      <p>Nom nom nom nom</p>
        </Route>
        <Route path="/pizza/:type">
        </Route>
      </Switch>
      </div>
  );
};
export default App;

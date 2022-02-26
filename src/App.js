import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
const App = () => {
  console.log("secret message")
  return (
    <div clasName="App">
    <header>
      <Link to="/">Home</Link>
      </header>
      <Switch>
        <Route exact path="/">
        <h1>Okay Bloomer, Eat</h1>
      <p>Nom nom nom nom</p>
      <p>Nom nom nom nom</p>
      <p>Nom nom nom nom</p>
        </Route>
      </Switch>
      </div>
  );
};
export default App;

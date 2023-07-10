import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './pages/Login';
import Meals from './pages/Meals';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/meals" component={ Meals } />
        <Route path="/drinks" />
        <Route path="/meals/:id-da-receita" />
        <Route path="/drinks/:id-da-receita" />
        <Route path="/meals/:id-da-receita/in-progress" />
        <Route path="/drinks/:id-da-receita/in-progress" />
        <Route path="/profile" />
        <Route path="/done-recipes" />
        <Route path="/favorite-recipes" />
      </Switch>
    </div>
  );
}

export default App;

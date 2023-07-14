import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import DoneRecipes from './pages/Done-Recipes';
import FavoriteRecipes from './pages/Favorite-Recipes';
import RecipeDetails from './Components/RecipeDetails';
import RecipeInProgress from './Components/RecipeInProgress';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route exact path="/meals" component={ Meals } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/meals/:id" render={ () => <RecipeDetails /> } />
        <Route exact path="/drinks/:id" render={ () => <RecipeDetails /> } />
        <Route
          exact
          path="/meals/:id/in-progress"
          render={ () => <RecipeInProgress /> }
        />
        <Route
          exact
          path="/drinks/:id/in-progress"
          render={ () => <RecipeInProgress /> }
        />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </div>
  );
}

export default App;

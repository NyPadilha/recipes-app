import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function StartRecipes({ details }) {
  const [inProgress, setInProgress] = useState({ progress: false });
  const [recipeInProgressStorage, setRecipeInProgressStorage] = useState('no');
  const localStorageRecipes = {
    drinks: [],
    meals: [],
  };

  const localStorageInprogress = localStorage.getItem('inProgressRecipes');

  const { id } = useParams();
  const { push, location: { pathname } } = useHistory();

  const validateRecipeStartDrinks = () => {
    const trasform = JSON.parse(localStorageInprogress);
    const { drinks } = trasform;
    if (pathname.includes('/drinks')) {
      const resultValidate = Object.keys(drinks[0]).find((idDrink) => idDrink === id);
      return (resultValidate) ? 'ok' : 'no';
    }
  };

  const validateRecipeStartMeals = () => {
    const trasform = JSON.parse(localStorageInprogress);
    const { meals } = trasform;
    if (pathname.includes('/meals')) {
      const resultValidate = Object.keys(meals[0]).find((idMeal) => idMeal === id);
      return (resultValidate) ? 'ok' : 'no';
    }
  };

  if (localStorageInprogress) {
    const trasform = JSON.parse(localStorageInprogress);
    const { drinks, meals } = trasform;
    if (pathname.includes('/drinks') && drinks > 0) {
      setRecipeInProgressStorage(validateRecipeStartDrinks);
    }
    if (pathname.includes('/meals') && meals > 0) {
      setRecipeInProgressStorage(validateRecipeStartMeals);
    }
  }

  const inProgressLocalStorage = () => {
    const { meals, drinks } = details;

    if (meals) {
      const entriesDatails = Object.entries(meals)[0][1];
      const listIngredients = Object.entries(entriesDatails)
        .filter((key) => key[0].includes('strIngredient'));
      const arrayIngredients = listIngredients
        .filter((ingredient) => ingredient[1] !== null && ingredient[1]);
      const finaliseIngredient = arrayIngredients.map((ingredient) => ingredient[1]);
      localStorageRecipes.meals = [{ [id]: finaliseIngredient }];
      localStorage.setItem('inProgressRecipes', JSON.stringify(localStorageRecipes));
      push(`/meals/${id}/in-progress`);
    }
    if (drinks) {
      const entriesDatails = Object.entries(drinks)[0][1];
      const listIngredients = Object.entries(entriesDatails)
        .filter((key) => key[0].includes('strIngredient'));
      const arrayIngredients = listIngredients
        .filter((ingredient) => ingredient[1] !== null && ingredient[1]);
      const finaliseIngredient = arrayIngredients.map((ingredient) => ingredient[1]);
      localStorageRecipes.drinks = [{ [id]: finaliseIngredient }];
      localStorage.setItem('inProgressRecipes', JSON.stringify(localStorageRecipes));
      push(`/drinks/${id}/in-progress`);
    }
  };

  const defineProgress = () => {
    inProgressLocalStorage();
    if (!inProgress.progress) {
      setInProgress({ progress: true });
    } else {
      setInProgress({ progress: false });
    }
  };

  return (
    <div>
      {
        (!inProgress.progress) && (
          <button
            data-testid="start-recipe-btn"
            onClick={ defineProgress }
            className="footer"
          >
            {(!localStorageInprogress) ? 'Start Recipe' : 'Continue Recipe'}
          </button>)
      }
      {

      }

    </div>
  );
}

export default StartRecipes;

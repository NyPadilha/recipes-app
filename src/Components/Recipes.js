import { useContext } from 'react';
import RecipeContext from '../context/useContext';

function Recipes() {
  const { recipeData } = useContext(RecipeContext);
  const { drinks, meals } = recipeData;
  return (
    <div>
      {
        (meals) && meals.map((recipe, index) => {
          const { strMealThumb, strMeal } = recipe;
          const validationIndex = 11;
          if (index <= validationIndex) {
            return (
              <div
                className="cardMeals"
                key={ strMeal }
                data-testid={ `${index}-recipe-card` }
              >
                <img
                  src={ strMealThumb }
                  alt={ strMeal }
                  data-testid={ `${index}-card-img` }
                />
                <h1 data-testid={ `${index}-card-name` }>{strMeal}</h1>
              </div>
            );
          }
          return null;
        })
      }
      {
        (drinks) && drinks.map((recipe, index) => {
          const { strDrinkThumb, strDrink } = recipe;
          const validationIndex = 11;
          if (index <= validationIndex) {
            return (
              <div
                className="cardDrinks"
                key={ strDrink }
                data-testid={ `${index}-recipe-card` }
              >
                <img
                  src={ strDrinkThumb }
                  alt={ strDrink }
                  data-testid={ `${index}-card-img` }
                />
                <h1 data-testid={ `${index}-card-name` }>{strDrink}</h1>
              </div>
            );
          }
          return null;
        })
      }
    </div>
  );
}

export default Recipes;

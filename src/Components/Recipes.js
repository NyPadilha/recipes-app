import { useContext } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import RecipeContext from '../context/useContext';

function Recipes() {
  const { recipeData, filterRecipe } = useContext(RecipeContext);

  const { drinks, meals } = filterRecipe !== '' ? filterRecipe : recipeData;
  console.log(meals);
  return (
    <div>
      {
        (meals) && meals.map((recipe, index) => {
          const { strMealThumb, strMeal, idMeal } = recipe;
          const validationIndex = 11;
          console.log(recipe);
          if (index <= validationIndex) {
            return (
              <div
                key={ strMeal }
                data-testid={ `${index}-recipe-card` }
              >
                <Link to={ `/meals/${idMeal}` }>
                  <img
                    className="cardMeals"
                    src={ strMealThumb }
                    alt={ strMeal }
                    data-testid={ `${index}-card-img` }
                  />
                  <h1 data-testid={ `${index}-card-name` }>{strMeal}</h1>
                </Link>
              </div>
            );
          }
          return null;
        })
      }
      {
        (drinks) && drinks.map((recipe, index) => {
          const { strDrinkThumb, strDrink, idDrink } = recipe;
          const validationIndex = 11;
          if (index <= validationIndex) {
            return (
              <div
                key={ strDrink }
                data-testid={ `${index}-recipe-card` }
              >
                <Link to={ `/drinks/${idDrink}` }>
                  <img
                    className="cardDrinks"
                    src={ strDrinkThumb }
                    alt={ strDrink }
                    data-testid={ `${index}-card-img` }
                  />
                  <h1 data-testid={ `${index}-card-name` }>{strDrink}</h1>
                </Link>
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

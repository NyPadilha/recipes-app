import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchApiRecipeID, fetchApiUseEffect } from '../helpers/fetchApi';
import StartRecipes from './StartRecipes';

export default function RecipeDetails() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [mealsRecomendations, setMealsRecomendations] = useState([]);
  const [drinksRecomendations, setDrinksRecomendations] = useState([]);
  const { location: { pathname } } = useHistory();

  const path = pathname.includes('/meals') ? 'Meal' : 'Drink';

  useEffect(() => {
    const getRecipe = async () => {
      const recipe = await fetchApiRecipeID(id, pathname);
      setDetails(recipe);
    };
    getRecipe();
  }, [id, pathname]);

  useEffect(() => {
    const getRecomendations = async () => {
      const meals = await fetchApiUseEffect('/meals');
      const drinks = await fetchApiUseEffect('/drinks');
      setMealsRecomendations(meals);
      setDrinksRecomendations(drinks);
    };
    getRecomendations();
  }, []);

  console.log(mealsRecomendations);
  console.log(drinksRecomendations);

  const { meals, drinks } = details;
  const recipe = path === 'Meal' ? meals : drinks;

  return (
    <div>
      {
        details.length !== 0 && (
          <div>
            {
              recipe.map((detail) => (
                <div key={ detail.strMeal }>
                  <img
                    src={ detail.strMealThumb }
                    alt="recipe"
                    data-testid="recipe-photo"
                    className="cardMeals"
                  />
                  {path === 'Drink' && (
                    <img
                      src={ detail.strDrinkThumb }
                      alt="recipe"
                      data-testid="recipe-photo"
                      className="cardDrinks"
                    />
                  )}
                  <h1 data-testid="recipe-title">{ detail.strMeal }</h1>
                  {path === 'Drink' && (
                    <h1 data-testid="recipe-title">{ detail.strDrink }</h1>
                  )}

                  <h2 data-testid="recipe-category">{ detail.strCategory }</h2>
                  {
                    path === 'Drink' && (
                      <h2 data-testid="recipe-category">{ detail.strAlcoholic}</h2>
                    )
                  }
                  <h3>Ingredients</h3>
                  <ul>
                    {
                      Object.entries(detail).filter((key) => key[0]
                        .includes('strIngredient'))
                        .map((ingredient, index) => (
                          <div
                            data-testid={ `${index}-ingredient-name-and-measure` }
                            key={ index }
                          >
                            {ingredient[1]}
                          </div>
                        ))
                    }
                    {
                      Object
                        .entries(detail).filter((key) => key[0].includes('strMeasure'))
                        .map((measure, index) => (
                          <div
                            data-testid={ `${index}-ingredient-name-and-measure` }
                            key={ index }
                          >
                            {measure[1]}
                          </div>
                        ))
                    }
                  </ul>
                  <h3>Instructions</h3>

                  <p data-testid="instructions">{ detail.strInstructions }</p>
                  {pathname.includes('/meals') && (
                    <div>
                      <h3>Video</h3>
                      <iframe
                        data-testid="video"
                        key="youtube"
                        width="560"
                        height="315"
                        src={ detail.strYoutube }
                        title="recipe-video"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              ))
            }
          </div>
        )
      }
      <StartRecipes details={ details } />
    </div>
  );
}

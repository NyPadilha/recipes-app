import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchApiRecipeID } from '../helpers/fetchApi';
import FavoriteRecipes from './FavoriteRecipes';
import ShareRecipes from './ShareRecipes';

export default function RecipeInProgress() {
  const [recipeCurrent, setRecipeCurrent] = useState([]);
  const { id } = useParams();
  const { location: { pathname } } = useHistory();

  const path = pathname.includes('/meals') ? 'Meal' : 'Drink';

  useEffect(() => {
    const getRecipe = async () => {
      const recipe = await fetchApiRecipeID(id, pathname);
      setRecipeCurrent(recipe);
    };
    getRecipe();
  }, [id, pathname]);

  const { meals, drinks } = recipeCurrent;
  const recipes = path === 'Meal' ? meals : drinks;

  return (
    <div>
      {
        recipeCurrent.length !== 0 && (
          recipes.map((recipe) => (
            <div key={ recipe.strMeal }>
              {
                path === 'Meal' && (
                  <img
                    src={ recipe.strMealThumb }
                    alt="recipe"
                    data-testid="recipe-photo"
                  />
                )
              }
              {path === 'Drink' && (
                <img
                  src={ recipe.strDrinkThumb }
                  alt="recipe"
                  data-testid="recipe-photo"
                />
              )}
              {
                path === 'Meal' && (
                  <h1 data-testid="recipe-title">{ recipe.strMeal }</h1>
                )
              }
              {path === 'Drink' && (
                <h1 data-testid="recipe-title">{ recipe.strDrink }</h1>
              )}
              {
                path === 'Meal' && (
                  <h2 data-testid="recipe-category">{ recipe.strCategory }</h2>
                )
              }
              {
                path === 'Drink' && (
                  <h2 data-testid="recipe-category">{ recipe.strAlcoholic}</h2>
                )
              }
              <h3>Ingredients</h3>

              {
                Object.entries(recipe).filter((key) => key[0]
                  .includes('strIngredient'))

                  .map((ingredient, index) => (
                    (ingredient[1] !== '' && ingredient[1] !== null) && (
                      <div key={ index }>
                        <label
                          htmlFor={ `ingredient-${index}` }
                          data-testid={ `${index}-ingredient-step` }
                        >
                          <input
                            type="checkbox"
                            name={ `ingredient-${index}` }
                            id={ `ingredient-${index}` }
                          />
                          {`${ingredient[1]} - ${recipe[`strMeasure${index + 1}`]}`}
                        </label>

                      </div>
                    )

                  ))
              }
              <h3>Instructions</h3>
              <p data-testid="instructions">{ recipe.strInstructions }</p>
            </div>
          ))
        )
      }
      <FavoriteRecipes />
      <ShareRecipes />
      <button data-testid="finish-recipe-btn">Finish</button>
    </div>
  );
}

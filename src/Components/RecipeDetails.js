import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchApiRecipeID } from '../helpers/fetchApi';

export default function RecipeDetails() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const { location: { pathname } } = useHistory();

  const path = pathname.includes('/meals') ? 'Meal' : 'Drink';

  const getRecipe = async () => {
    const recipe = await fetchApiRecipeID(id, pathname);
    setDetails(recipe);
  };

  useEffect(() => {
    getRecipe();
  }, []);

  const { meals, drinks } = details;
  const recipe = path === 'Meal' ? meals : drinks;

  // console.log(meals);
  console.log(details);
  // pegar ingredients
  // const ingredient = path === 'Meal'
  //   ? meals.filter((key) => key.includes('strIngredient'))
  //   : drinks.filter((key) => key.includes('strIngredient'));

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
                  />
                  {path === 'Drink' && (
                    <img
                      src={ detail.strDrinkThumb }
                      alt="recipe"
                      data-testid="recipe-photo"
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
                      Object.entries(detail).filter((key) => key[0].includes('strIngredient')).map((ingredient, index) => (
                        <div
                          data-testid={ `${index}-ingredient-name-and-measure` }
                          key={ index }
                        >
                          {ingredient[1]}
                        </div>
                      ))
                    }
                    {
                      Object.entries(detail).filter((key) => key[0].includes('strMeasure')).map((measure, index) => (
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
    </div>
  );
}

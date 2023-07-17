import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchApiRecipeID } from '../helpers/fetchApi';
// eslint-disable-next-line import/no-named-as-default
import FinishRecipeBtn from './FinishRecipeBtn';
import ShareRecipes from './ShareRecipes';
import './RecipeInProgress.css';
import FavoriteButton from './FavoriteButton';

export default function RecipeInProgress() {
  const [recipeCurrent, setRecipeCurrent] = useState([]);
  const [checkboxStates, setCheckboxStates] = useState([]);
  const [ingredientsNumber, setIngredientsNumber] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
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

  useEffect(() => {
    const checkboxStatesStorage = JSON.parse(localStorage.getItem('checkboxStates'));
    if (checkboxStatesStorage) {
      setCheckboxStates(checkboxStatesStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
  }, [checkboxStates]);

  const { meals, drinks } = recipeCurrent;
  const recipes = path === 'Meal' ? meals : drinks;

  const handleChecked = (index) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [index]: !prevStates[index],
    }));
  };

  useEffect(() => {
    if (recipeCurrent.length !== 0) {
      const ingredientsArray = Object.entries(recipes[0]).filter((key) => key[0]
        .includes('strIngredient'));
      const filteredIngredients = ingredientsArray.filter((ingredient) => (
        ingredient[1] !== '' && ingredient[1] !== null
      ));
      setIngredientsNumber(filteredIngredients);
    }
  }, [recipeCurrent, path, recipes]);

  useEffect(() => {
    const verifyChecked = () => {
      const checked = Object.values(checkboxStates);
      if (checked.length === 0) {
        setAllChecked(false);
      } else if (checked.length === ingredientsNumber.length) {
        setAllChecked(checked.every((value) => value === true));
      } else {
        setAllChecked(false);
      }
    };
    verifyChecked();
  }, [checkboxStates]);

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
                          className={ checkboxStates[index] ? 'checked' : '' }
                        >
                          <input
                            type="checkbox"
                            name={ `ingredient-${index}` }
                            id={ `ingredient-${index}` }
                            checked={ checkboxStates[index] }
                            onChange={ () => handleChecked(index) }
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
      <FavoriteButton details={ recipeCurrent } />
      <ShareRecipes />
      <FinishRecipeBtn recipeCurrent={ recipeCurrent } allChecked={ allChecked } />
    </div>
  );
}

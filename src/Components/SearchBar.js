import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchApiIngredient, fetchApiName,
  fetchApiFirstLetter } from '../helpers/fetchApi';
import RecipeContext from '../context/useContext';

function SearchBar() {
  const { setRecipeData, recipeData } = useContext(RecipeContext);
  const [inputValue, setInputValue] = useState('');
  const [checkedInputs, setCheckedInputs] = useState(
    {
      ingredient: true,
      name: false,
      firstLetter: false,
    },
  );
  const { push, location: { pathname } } = useHistory();

  console.log(recipeData);

  const handleChange = ({ target }) => {
    if (target.value === 'ingredient') {
      const newState = { ingredient: true,
        name: false,
        firstLetter: false };
      setCheckedInputs(newState);
    } else if (target.value === 'name') {
      const newState = { ingredient: false,
        name: true,
        firstLetter: false };
      setCheckedInputs(newState);
    } else {
      const newState = { ingredient: false,
        name: false,
        firstLetter: true };
      setCheckedInputs(newState);
    }
  };

  const routeOneRecipe = (data) => {
    const idDrink = data.drinks;
    const idMeals = data.meals;

    if (idMeals?.length === 1 && pathname === '/meals') {
      return push(`/meals/${idMeals[0].idMeal}`);
    }
    if (idDrink?.length === 1 && pathname === '/drinks') {
      return push(`/drinks/${idDrink[0].idDrink}`);
    }
  };

  const handleSearch = async () => {
    const { ingredient, name, firstLetter } = checkedInputs;
    if (ingredient) {
      const data = await fetchApiIngredient(inputValue, pathname);
      setRecipeData(data);
      routeOneRecipe(data);
    }
    if (name) {
      const data = await fetchApiName(inputValue, pathname);
      setRecipeData(data);
      routeOneRecipe(data);
    }
    if (firstLetter && inputValue.length === 1) {
      const data = await fetchApiFirstLetter(inputValue, pathname);
      setRecipeData(data);
      routeOneRecipe(data);
    } else if (firstLetter && inputValue.length !== 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          data-testid="search-input"
          value={ inputValue }
          onChange={ ({ target }) => setInputValue(target.value) }
        />
      </div>

      <label>
        Ingredient
        <input
          type="radio"
          name="searchInput"
          value="ingredient"
          data-testid="ingredient-search-radio"
          onChange={ handleChange }
          checked={ checkedInputs.ingredient }
        />
      </label>
      <label>
        Name
        <input
          type="radio"
          name="searchInput"
          value="name"
          data-testid="name-search-radio"
          onChange={ handleChange }
          checked={ checkedInputs.name }
        />
      </label>
      <label>
        First Letter
        <input
          type="radio"
          name="searchInput"
          value="firstLetter"
          data-testid="first-letter-search-radio"
          onChange={ handleChange }
          checked={ checkedInputs.firstLetter }
        />
      </label>
      <div>
        <button
          data-testid="exec-search-btn"
          onClick={ handleSearch }
        >
          SEARCH
        </button>
      </div>
    </>
  );
}

export default SearchBar;

import { useState, useContext } from 'react';
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

  const handleSearch = async () => {
    const { ingredient, name, firstLetter } = checkedInputs;
    if (ingredient) {
      const data = await fetchApiIngredient(inputValue);
      setRecipeData(data);
    }
    if (name) {
      const data = await fetchApiName(inputValue);
      setRecipeData(data);
    }
    if (firstLetter && inputValue.length === 1) {
      const data = await fetchApiFirstLetter(inputValue);
      setRecipeData(data);
    } else if (firstLetter && inputValue.length !== 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  return (
    <>
      <input
        type="text"
        data-testid="search-input"
        value={ inputValue }
        onChange={ ({ target }) => setInputValue(target.value) }
      />
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
      <button
        data-testid="exec-search-btn"
        onClick={ handleSearch }
      >
        SEARCH

      </button>
    </>
  );
}

export default SearchBar;

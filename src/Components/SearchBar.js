import { useState } from 'react';

function SearchBar() {
  const [checkedInputs, setCheckedInputs] = useState(
    {
      ingredient: true,
      name: false,
      firstLetter: false,
    },
  );

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

  return (
    <>
      <input type="text" data-testid="search-input" />
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
      <button data-testid="exec-search-btn">SEARCH</button>
    </>
  );
}

export default SearchBar;

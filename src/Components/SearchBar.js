function SearchBar() {
  return (
    <>
      <label>
        Ingredient
        <input type="radio" data-testid="ingredient-search-radio" />
      </label>
      <label>
        Name
        <input type="radio" data-testid="name-search-radio" />
      </label>
      <label>
        First Letter
        <input type="radio" data-testid="first-letter-search-radio" />
      </label>
      <button data-testid="exec-search-btn">SEARCH</button>
    </>
  );
}

export default SearchBar;

import ShareRecipes from './ShareRecipes';

function DoneRecipes() {
  const doneRecipesStorage = localStorage.getItem('doneRecipes');
  const convertDoneRecipes = JSON.parse(doneRecipesStorage);
  console.log(convertDoneRecipes);
  return (
    <div>
      <button data-testid="filter-by-all-btn">All</button>
      <button data-testid="filter-by-meal-btn">Meals</button>
      <button data-testid="filter-by-drink-btn">Drinks</button>
      {
        (convertDoneRecipes) && convertDoneRecipes.map((recipe, index) => {
          const { category, image, name, doneDate, tags } = recipe;
          return (
            <div key={ name }>
              <img
                src={ image }
                alt={ name }
                data-testid={ `${index}-horizontal-image` }
              />
              <p data-testid={ `${index}-horizontal-top-text` }>{category}</p>
              <p data-testid={ `${index}-horizontal-name` }>{name}</p>
              <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>
              <ShareRecipes index={ index } />
              {
                tags.map((tag) => (
                  <p
                    key={ tag }
                    data-testid={ `${index}-${tag}-horizontal-tag` }
                  >
                    {tag}
                  </p>))
              }
            </div>
          );
        })
      }
    </div>
  );
}

export default DoneRecipes;

import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import RecipeContext from '../context/useContext';

export default function CategoryButtons() {
  const { categoryDrinks, categoryMeals, loading } = useContext(RecipeContext);
  const { location: { pathname } } = useHistory();
  const numberOfButtons = 5;
  // console.log(categoryDrinks);
  // console.log(categoryMeals);
  const array = pathname === '/meals' ? categoryMeals : categoryDrinks;
  return (
    <div>
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          array.map((item, index) => index < numberOfButtons && (
            <button
              key={ item.strCategory }
              data-testid={ `${item.strCategory}-category-filter` }
            >
              {item.strCategory}

            </button>
          ))
        )
      }

    </div>
  );
}

import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import RecipeContext from '../context/useContext';
import { fetchDrinksByCategory, fetchMealsByCategory } from '../helpers/fetchApi';

export default function CategoryButtons() {
  const { categoryDrinks, categoryMeals,
    loading, setFilterRecipe } = useContext(RecipeContext);

  const [filter, setFilter] = useState(false);
  const [togleParameter, setTogleParameter] = useState('');

  const { location: { pathname } } = useHistory();
  const numberOfButtons = 5;

  const setFilterByCategory = async (category) => {
    if (pathname === '/meals') {
      const dataMeals = await fetchMealsByCategory(category);
      console.log(dataMeals);
      setFilterRecipe(dataMeals);
    }

    if (pathname === '/drinks') {
      const dataDrinks = await fetchDrinksByCategory(category);
      setFilterRecipe(dataDrinks);
    }
  };

  const clearFilter = () => {
    setFilterRecipe('');
  };

  const toggleFilter = (parameter) => {
    if (togleParameter === parameter && filter === true) {
      clearFilter();
    } else {
      setFilterByCategory(parameter);
    }
    setTogleParameter(parameter);
    setFilter(!filter);
  };

  const array = pathname === '/meals' ? categoryMeals : categoryDrinks;
  return (
    <div>
      <button
        data-testid="All-category-filter"
        onClick={ clearFilter }
      >
        all

      </button>
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          array.map((item, index) => index < numberOfButtons && (
            <button
              key={ item.strCategory }
              data-testid={ `${item.strCategory}-category-filter` }
              onClick={ () => toggleFilter(item.strCategory) }
            >
              {item.strCategory}

            </button>
          ))
        )
      }

    </div>
  );
}

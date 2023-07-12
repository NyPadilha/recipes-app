import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './useContext';
import { fetchCategoryMeals, fetchCategoryDrinks } from '../helpers/fetchApi';

function RecipeProvider({ children }) {
  const [recipeData, setRecipeData] = useState({});
  const [categoryDrinks, setCategoryDrinks] = useState({});
  const [categoryMeals, setCategoryMeals] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const awaiData = async () => {
      const dataDinks = await fetchCategoryDrinks();
      const dataMeals = await fetchCategoryMeals();
      setCategoryMeals(dataMeals.meals);
      setCategoryDrinks(dataDinks.drinks);
      setLoading(false);
    };
    awaiData();
  }, []);

  const store = useMemo(() => ({
    recipeData,
    setRecipeData,
    categoryDrinks,
    setCategoryDrinks,
    categoryMeals,
    setCategoryMeals,
    loading,
    setLoading,
  }), [recipeData, categoryDrinks, categoryMeals, loading]);

  return (
    <RecipeContext.Provider value={ store }>
      {children}
    </RecipeContext.Provider>
  );
}
RecipeProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default RecipeProvider;

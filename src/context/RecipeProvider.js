import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './useContext';

function RecipeProvider({ children }) {
  const [recipeData, setRecipeData] = useState({});

  const store = useMemo(() => ({
    recipeData,
    setRecipeData,
  }), [recipeData]);

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

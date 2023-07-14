import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function FavoriteRecipes({ details }) {
  const [favorite, setFavorite] = useState(false);
  const { pathname } = useLocation();
  const { id } = useParams();

  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'))
    ? JSON.parse(localStorage.getItem('favoriteRecipes'))
    : [];

  const favoriteFinder = () => {
    const find = favoriteRecipes.some((recipe) => recipe.id === id);
    setFavorite(find);
  };

  const path = pathname.includes('/meals') ? 'Meal' : 'Drink';
  const type = pathname.includes('/meals') ? 'meal' : 'drink';

  const handleFavorite = () => {
    const { meals, drinks } = details;
    const recipe = path === 'Meal' ? meals : drinks;
    const detailsMap = recipe.map((detail) => detail);
    if (!favorite) {
      const newFavorite = [...favoriteRecipes, {
        id,
        type,
        nationality: path === 'Meal' ? detailsMap[0].strArea : '',
        category: detailsMap[0].strCategory,
        alcoholicOrNot: path === 'Drink' ? detailsMap[0].strAlcoholic : '',
        name: detailsMap[0].strMeal || detailsMap[0].strDrink,
        image: detailsMap[0].strMealThumb || detailsMap[0].strDrinkThumb,
      }];
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorite));
    } else {
      const newFavorite = favoriteRecipes.filter((r) => r.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorite));
    }
    setFavorite(!favorite);
  };

  useEffect(() => {
    favoriteFinder();
  }, []);

  return (
    <div>
      <input
        type="image"
        alt="favorite-btn"
        data-testid="favorite-btn"
        onClick={ () => handleFavorite() }
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
      />
    </div>
  );
}

FavoriteRecipes.propTypes = {
  details: PropTypes.shape,
  pathname: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

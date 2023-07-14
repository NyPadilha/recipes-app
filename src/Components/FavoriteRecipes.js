import { useState } from 'react';
// import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function FavoriteRecipes({ details, pathname, id }) {
  const [favorite, setFavorite] = useState(false);
  // const { location: { pathname } } = useLocation();
  // const { id } = useParams();

  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'))
    ? JSON.parse(localStorage.getItem('favoriteRecipes'))
    : localStorage.setItem('favoriteRecipes', JSON.stringify([]));

  // const favoriteFinder = () => {
  //   const find = favoriteRecipes.some((recipe) => recipe.id === id);
  //   setFavorite(find);
  // };

  const path = pathname.includes('/meals') ? 'Meal' : 'Drink';
  const type = pathname.includes('/meals') ? 'meal' : 'drink';

  const { meals, drinks } = details;
  const recipe = path === 'Meal' ? meals : drinks;

  console.log('fjioawsfhjvawsoivgwhjoi', recipe);

  const handleFavorite = () => {
    const detailsMap = recipe.map((detail) => detail);
    if (!favorite) {
      const newFavorite = [...favoriteRecipes, {
        id,
        type,
        nationality: path === 'Meal' ? detailsMap.strArea : '',
        category: detailsMap.strCategory,
        alcoholicOrNot: path === 'Drink' ? detailsMap.strAlcoholic : '',
        name: detailsMap.strMeal || detailsMap.strDrink,
        image: detailsMap.strMealThumb || detailsMap.strDrinkThumb,
      }];
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorite));
    } else {
      const newFavorite = favoriteRecipes.filter((r) => r.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorite));
    }
    setFavorite(!favorite);
  };

  // useEffect(() => {
  //   favoriteFinder();
  // }, []);

  return (
    <div>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => handleFavorite() }
      >
        {
          favorite
            ? <img src={ blackHeartIcon } alt="favorite" />
            : <img src={ whiteHeartIcon } alt="favorite" />
        }
      </button>
    </div>
  );
}

FavoriteRecipes.propTypes = {
  details: PropTypes.shape,
  pathname: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

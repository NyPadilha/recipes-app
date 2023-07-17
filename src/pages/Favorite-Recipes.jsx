import Header from '../Components/Header';
import FavoriteRecipes from '../Components/FavoriteRecipes';

function Favoriterecipes() {
  const routeName = 'Favorite Recipes';
  return (
    <div>
      <Header routeName={ routeName } />
      <FavoriteRecipes />
    </div>

  );
}

export default Favoriterecipes;

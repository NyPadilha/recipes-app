import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Components/Header';
import mealIcon from '../images/mealIcon.svg';
import Footer from '../Components/Footer';
import Recipes from '../Components/Recipes';
import { fetchApiUseEffect } from '../helpers/fetchApi';
import RecipeContext from '../context/useContext';

function Meals() {
  const routeName = 'Meals';
  const { setRecipeData } = useContext(RecipeContext);
  const { location: { pathname } } = useHistory();

  useEffect(() => {
    const renderComponents = async () => {
      const returnApi = await fetchApiUseEffect(pathname);
      setRecipeData(returnApi);
    };
    renderComponents();
  }, [pathname, setRecipeData]);
  // console.log(recipeData);
  return (
    <div>
      <Header icon={ mealIcon } routeName={ routeName } />
      <Recipes />
      <Footer />
    </div>
  );
}

export default Meals;

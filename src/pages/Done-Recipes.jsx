import Header from '../Components/Header';
import drinkIcon from '../images/drinkIcon.svg';

function DoneRecipes() {
  const routeName = 'Done Recipes';
  return (
    <Header icon={ drinkIcon } routeName={ routeName } />
  );
}

export default DoneRecipes;

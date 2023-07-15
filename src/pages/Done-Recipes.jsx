import Header from '../Components/Header';
import drinkIcon from '../images/drinkIcon.svg';
import DoneRecipes from '../Components/DoneRecipes';

function Donerecipes() {
  const routeName = 'Done Recipes';
  return (
    <div>
      <Header icon={ drinkIcon } routeName={ routeName } />
      {/* <DoneRecipes /> */}
    </div>
  );
}

export default Donerecipes;

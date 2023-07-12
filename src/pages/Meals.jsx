import Cards from '../Components/Cards';
import Header from '../Components/Header';
import mealIcon from '../images/mealIcon.svg';

function Meals() {
  const routeName = 'Meals';
  return (
    <div>
      <Header icon={ mealIcon } routeName={ routeName } />
      <Cards />
    </div>
  );
}

export default Meals;
